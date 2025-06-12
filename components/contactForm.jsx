import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import AlertMessage from "./AlertMessage";


const ContactForm = ({ onClose }) => {
    const [alert, setAlert] = useState({ show: false, type: "success", message: "", title: "" });
    const [formData, setFormData] = useState({
        nombre_completo: "",
        telefono: "",
        email: "",
        ubicacion: "",
        mensaje: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre_completo.trim()) {
            newErrors.nombre_completo = "El nombre completo es requerido";
        } else if (formData.nombre_completo.trim().length < 2) {
            newErrors.nombre_completo = "El nombre debe tener al menos 2 caracteres";
        }

        if (!formData.email.trim()) {
            newErrors.email = "El email es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "El formato del email no es válido";
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = "El mensaje es requerido";
        }

        if (formData.telefono && formData.telefono.trim().length < 6) {
            newErrors.telefono = "El teléfono debe tener al menos 6 dígitos";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            // URL de tu API Django (ajusta según tu configuración)
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

            const response = await fetch(`${API_URL}/usuarios/api/clientes-potenciales/crear/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre_completo: formData.nombre_completo.trim(),
                    telefono: formData.telefono.trim(),
                    email: formData.email.trim().toLowerCase(),
                    ubicacion: formData.ubicacion.trim(),
                    mensaje: formData.mensaje.trim(),
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setAlert({
                    show: true,
                    type: "success",
                    title: `¡Gracias ${formData.nombre_completo}!`,
                    message: "Hemos recibido tu mensaje correctamente.",
                });
                setFormData({
                    nombre_completo: "",
                    telefono: "",
                    email: "",
                    ubicacion: "",
                    mensaje: ""
                });

                // Esperar 4 segundos antes de cerrar
                setTimeout(() => {
                    setAlert({ show: false, type: "", message: "", title: "" });
                    onClose();
                }, 4000);
            }

        } catch (error) {
            setAlert({
                show: true,
                type: "error",
                title: "Error al enviar",
                message: data.error || "Por favor, intenta nuevamente.",
            });

            setTimeout(() => {
                setAlert({ show: false, type: "", message: "", title: "" });
            }, 4000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {alert.show ? (
                <AlertMessage
                    type={alert.type}
                    title={alert.title}
                    message={alert.message}
                    onClose={() => setAlert({ ...alert, show: false })}
                />
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-md mx-4 relative max-h-[90vh] overflow-y-auto"
                >

                    {/* Botón de cerrar */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
                        disabled={loading}
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Contáctanos</h2>
                    <p className="text-gray-600 text-center mb-6 text-sm">
                        Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo.
                    </p>

                    <div className="space-y-4">
                        {/* Nombre completo */}
                        <div>
                            <input
                                type="text"
                                name="nombre_completo"
                                placeholder="Nombre completo *"
                                required
                                className={`w-full p-3 border rounded-lg text-black focus:outline-none focus:border-blue-500 ${errors.nombre_completo ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                onChange={handleChange}
                                value={formData.nombre_completo}
                                disabled={loading}
                            />
                            {errors.nombre_completo && (
                                <p className="text-red-500 text-sm mt-1">{errors.nombre_completo}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                required
                                className={`w-full p-3 border rounded-lg text-black focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                onChange={handleChange}
                                value={formData.email}
                                disabled={loading}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Teléfono */}
                        <div>
                            <input
                                type="tel"
                                name="telefono"
                                placeholder="Teléfono"
                                className={`w-full p-3 border rounded-lg text-black focus:outline-none focus:border-blue-500 ${errors.telefono ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                onChange={handleChange}
                                value={formData.telefono}
                                disabled={loading}
                            />
                            {errors.telefono && (
                                <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                            )}
                        </div>

                        {/* Ubicación */}
                        <div>
                            <input
                                type="text"
                                name="ubicacion"
                                placeholder="Ubicación"
                                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                value={formData.ubicacion}
                                disabled={loading}
                            />
                        </div>

                        {/* Mensaje */}
                        <div>
                            <textarea
                                name="mensaje"
                                placeholder="Mensaje *"
                                required
                                rows={4}
                                className={`w-full p-3 border rounded-lg text-black focus:outline-none focus:border-blue-500 resize-none ${errors.mensaje ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                onChange={handleChange}
                                value={formData.mensaje}
                                disabled={loading}
                            />
                            {errors.mensaje && (
                                <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                            )}
                        </div>

                        {/* Botones de acción */}
                        <div className="flex justify-between gap-3 pt-4">
                            <motion.button
                                type="button"
                                onClick={onClose}
                                whileTap={{ scale: 0.95 }}
                                disabled={loading}
                                className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Cerrar
                            </motion.button>
                            <motion.button
                                onClick={handleSubmit}
                                whileTap={{ scale: 0.95 }}
                                disabled={loading}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Enviando...</span>
                                    </div>
                                ) : (
                                    "Enviar"
                                )}
                            </motion.button>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center mt-4">
                        * Campos requeridos
                    </p>
                </motion.div>
            )}

        </div>
    );
};

export default ContactForm;