import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAff3-pnAkK2c8HuSUx-vu4zVa1rBe2bj0",
    authDomain: "chat-demo-final.firebaseapp.com",
    projectId: "chat-demo-final",
    storageBucket: "chat-demo-final.firebasestorage.app",
    messagingSenderId: "1047456983894",
    appId: "1:1047456983894:web:862144edd7f724dbf404f7"
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

export { db, app, firebaseConfig };