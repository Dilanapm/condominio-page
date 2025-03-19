import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwBBxqaYF7iH9oAEsV1Sj54nhiI7GcIHI",
  authDomain: "forms-ad2d6.firebaseapp.com",
  projectId: "forms-ad2d6",
  storageBucket: "forms-ad2d6.firebasestorage.app",
  messagingSenderId: "737200765779",
  appId: "1:737200765779:web:4f0e9bcac164273dd6ffa6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveContactData = async (formData: any): Promise<boolean> => {
    try {
      const docRef = await addDoc(collection(db, "contactos"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      console.log("Documento guardado con ID:", docRef.id);
      return true;
    } catch (error: Error) { // Especificamos que error es de tipo Error
      console.error("Error al guardar los datos:", error);
      throw new Error("No se pudo guardar los datos en Firestore: " + error.message);
    }
  };