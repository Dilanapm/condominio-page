import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 📌 Configuración del proyecto (reemplázala con la tuya)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
};

// 🔥 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📌 Función para guardar datos en Firestore
export const saveContactData = async (formData: any) => {
    try {
        await addDoc(collection(db, "contactos"), {
            ...formData,
            fecha: new Date().toISOString(), // 📌 Agregar fecha y hora
        });
        console.log("✅ Datos guardados en Firebase");
        return true;
    } catch (error) {
        console.error("❌ Error al guardar datos:", error);
        return false;
    }
};

export { db };
