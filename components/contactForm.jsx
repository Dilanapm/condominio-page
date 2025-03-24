import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Asegúrate de instalar `lucide-react` o usa otro ícono
import { saveContactData } from "@/utils/firebaseConfig"; // Asegúrate de que `saveContactData` esté correctamente importado

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        rol: "",
        mensaje: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const success = await saveContactData(formData);
        if (success) {
            alert("✅ Datos enviados correctamente a Firebase.");
            setFormData({ nombre: "", telefono: "", email: "", rol: "", mensaje: "" });
        } else {
            alert("❌ Error al enviar los datos.");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            >
                {/* Botón de cerrar */}
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-4">Contáctanos</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" name="nombre" placeholder="Nombre completo *" required
                        className="w-full p-2 border rounded text-black"
                        onChange={handleChange} value={formData.nombre}
                    />
                    <input 
                        type="tel" name="telefono" placeholder="Teléfono *" required
                        className="w-full p-2 border rounded text-black"
                        onChange={handleChange} value={formData.telefono}
                    />
                    <input 
                        type="email" name="email" placeholder="Email *" required
                        className="w-full p-2 border rounded text-black"
                        onChange={handleChange} value={formData.email}
                    />
                    <input 
                        type="text" name="ubicacion" placeholder="Ubicación"
                        className="w-full p-2 border rounded text-black"
                        onChange={handleChange} value={formData.rol}
                    />
                    <textarea 
                        name="mensaje" placeholder="Mensaje *" required rows={4}
                        className="w-full p-2 border rounded text-black"
                        onChange={handleChange} value={formData.mensaje}
                    />

                    {/* Botones de acción */}
                    <div className="flex justify-between">
                        <motion.button 
                            type="button" 
                            onClick={onClose}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                        >
                            Cerrar
                        </motion.button>
                        <motion.button 
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                            disabled={loading}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactForm;
