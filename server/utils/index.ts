import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import sgMail from "@sendgrid/mail";

export type EmailMessage = {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
};

const config = useRuntimeConfig();

export class firebaseAdmin {
    private app: any;

    constructor() {
        if (!getApps().length) {
            this.app = initializeApp({
                credential: cert({
                    type: config.FIREBASE_TYPE,
                    project_id: config.FIREBASE_PROJECT_ID,
                    private_key_id: config.FIREBASE_PRIVATE_KEY_ID,
                    private_key: config.FIREBASE_PRIVATE_KEY,
                    client_email: config.FIREBASE_CLIENT_EMAIL,
                    client_id: config.FIREBASE_CLIENT_ID,
                    auth_uri: config.FIREBASE_AUTH_URI,
                    token_uri: config.FIREBASE_TOKEN_URI,
                    auth_provider_x509_cert_url: config.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
                    client_x509_cert_url: config.FIREBASE_CLIENT_X509_CERT_URL,
                    universe_domain: config.FIREBASE_UNIVERSE_DOMAIN,
                } as any),
            });
        } else {
            this.app = getApps()[0];
        }
    }

    initialise() {
        return this.app;
    }

    getFirestore() {
        return getFirestore(this.app);
    }
}

export async function sendEmail(message: EmailMessage) {
    const SENDGRID_API_KEY = config.SENDGRID_API_KEY;

    sgMail.setApiKey(SENDGRID_API_KEY);

    try {
        await sgMail.send(message);
    } catch (error) {
        console.error(error);
    }
}

export function buildEmailMessageForContactForm(
    name: string,
    email: string,
    mobile: string,
    message: string,
    preferredToContact: string
) {
    const NOTIFICATION_TO_EMAIL = config.NOTIFICATION_TO_EMAIL as string;
    const NOTIFICATION_FROM_EMAIL = config.NOTIFICATION_FROM_EMAIL as string;

    const emailMessage = {
        to: NOTIFICATION_TO_EMAIL,
        from: NOTIFICATION_FROM_EMAIL,
        subject: "New Contact Form - The Glowing Artistry",
        text: `New Contact Form - The Glowing Artistry\n\n Name: ${name} \n Email: ${email} \n Mobile: ${mobile} \n Message: ${message} \n Preferred to be contacted via: ${preferredToContact}`,
        html: `New Contact Form - The Glowing Artistry<br/><br/><strong>Name:</strong>  ${name}<br/> <strong>Email:</strong> ${email}<br/> <strong>Mobile:</strong> ${mobile}<br/> <strong>Message:</strong> ${message} <br/> <strong>Preferred to be contacted via:</strong> ${preferredToContact}`,
    };
    return emailMessage;
}

export function buildEmailMessageForNewSubscriber(name: string, email: string) {
    const NOTIFICATION_TO_EMAIL = config.NOTIFICATION_TO_EMAIL as string;
    const NOTIFICATION_FROM_EMAIL = config.NOTIFICATION_FROM_EMAIL as string;

    const message = {
        to: NOTIFICATION_TO_EMAIL,
        from: NOTIFICATION_FROM_EMAIL,
        subject: "New Subscriber",
        text: `New Subscriber\n\n Name: ${name} \n Email: ${email}`,
        html: `New Subscriber<br/><br/><strong>Name:</strong>  ${name}<br/> <strong>Email:</strong> ${email}`,
    };
    return message;
}
