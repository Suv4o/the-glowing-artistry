import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();

export class firebaseAdmin {
    private app: any;

    constructor() {
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
    }

    initialise() {
        return this.app;
    }

    getFirestore() {
        return getFirestore(this.app);
    }
}
