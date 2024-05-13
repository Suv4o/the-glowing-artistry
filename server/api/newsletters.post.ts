import * as yup from "yup";
import { firebaseAdmin, sendEmail, buildEmailMessageForNewSubscriber } from "../utils";

// Initialize Firebase Admin Firestore
const firebase = new firebaseAdmin();
const firestore = firebase.getFirestore();

interface NewsLetters {
    name: string;
    email: string;
    token: string;
}

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as NewsLetters;
    const config = useRuntimeConfig();

    const ContactSchema = yup.object().shape({
        name: yup.string().required("Name is required").min(2, "Name is too short").max(50, "Name is too long"),
        email: yup.string().optional().email("Email is not valid"),
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

        // Remove token from body
        const contactRecordToUpdate = Object.entries(body).reduce((acc: Record<string, unknown>, [key, value]) => {
            if (key !== "token") {
                acc[key] = value;
            }
            return acc;
        }, {});

        // Read from firestore and check if email already exists
        const emailExists = await firestore.collection("newsletters").where("email", "==", body.email);

        const querySnapshot = await emailExists.get();
        const emailExistsData = querySnapshot.docs.map((doc) => doc.data());

        if (emailExistsData.length) {
            throw new Error("Email already exists");
        }

        // Add contact to Firestore
        await firestore.collection("newsletters").add({
            ...contactRecordToUpdate,
            created: new Date(),
        });

        const name = body?.name ?? "";
        const email = body?.email ?? "";

        await sendEmail(buildEmailMessageForNewSubscriber(name, email));
    } catch (error) {
        return error;
    }
});
