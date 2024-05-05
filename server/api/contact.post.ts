import * as yup from "yup";
import { firebaseAdmin, sendEmail, buildEmailMessageForContactForm } from "../utils";

interface Contact {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferredToContact: string;
    token: string;
}

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as Contact;
    const config = useRuntimeConfig();

    const ContactSchema = yup.object().shape({
        name: yup.string().required("Name is required").min(2, "Name is too short").max(50, "Name is too long"),
        email: yup.string().optional().email("Email is not valid"),
        phone: yup
            .string()
            .optional()
            .matches(/^[0-9]{10}$/, "Phone number is not valid"),
        message: yup.string().required("Message is required").min(10, "Message is too short"),
        preferredToContact: yup
            .string()
            .required("Preferred contact method is required")
            .oneOf(["email", "phone-call", "text"], "Preferred contact method is not valid"),
        token: yup.string().required("Token is required"),
    });

    try {
        const validContact = await ContactSchema.validate(body);

        if (!validContact) {
            throw new Error(validContact);
        }

        const recaptcha: any = await $fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${config.RECAPTCHA_SECRET_KEY}&response=${body.token}`,
        });

        if (!recaptcha.success) {
            throw new Error("Recaptcha failed");
        }

        // Initialize Firebase Admin Firestore
        const firebase = new firebaseAdmin();
        const firestore = firebase.getFirestore();

        // Remove token from body
        const contactRecordToUpdate = Object.entries(body).reduce((acc: Record<string, unknown>, [key, value]) => {
            if (key !== "token") {
                acc[key] = value;
            }
            return acc;
        }, {});

        // Add contact to Firestore
        await firestore.collection("contacts").add({
            ...contactRecordToUpdate,
            created: new Date(),
        });

        const name = body?.name ?? "";
        const email = body?.email ?? "";
        const mobile = body?.phone ?? "";
        const message = body?.message ?? "";
        const preferredToContact = body?.preferredToContact ?? "";

        await sendEmail(buildEmailMessageForContactForm(name, email, mobile, message, preferredToContact));
    } catch (error) {
        return error;
    }
});
