import * as yup from "yup";

interface Contact {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferredToContact: string;
}

export default defineEventHandler(async (event) => {
    const body = (await readBody(event)) as Contact;

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
    });

    try {
        const validContact = await ContactSchema.validate(body);

        if (!validContact) {
            throw new Error(validContact);
        }

        return body;
    } catch (error) {
        return error;
    }
});
