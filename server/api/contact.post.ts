import * as yup from "yup";

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

        return body;
    } catch (error) {
        return error;
    }
});
