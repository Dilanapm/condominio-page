import { QrCode, LogIn, Eye, Smartphone, Vote, ShieldCheck,Camera } from "lucide-react"; // Importamos los íconos

const FeaturesSection = () => {
    return (
        <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
            {/* Título */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Mejora la seguridad, control y accesibilidad en tu condominio
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
                Optimiza la gestión de accesos con tecnología avanzada y administra la seguridad de manera eficiente con nuestro sistema inteligente.
            </p>

            {/* Grid de funcionalidades */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-gray-800">
                {/* Control de Accesos con QR */}
                <div className="flex flex-col items-center">
                    <QrCode size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">Control de Accesos con QR</span>
                    <p className="text-sm text-gray-600 text-center">Escanea tu código QR con el personal (rol Vigilante) o con la cámara con IA para ingresar.</p>
                </div>

                {/* Registro Automático de Entradas y Salidas */}
                <div className="flex flex-col items-center">
                    <LogIn size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">Registro Automático</span>
                    <p className="text-sm text-gray-600 text-center">Monitorea quién entra y sale en tiempo real.</p>
                </div>

                {/* Transparencia */}
                <div className="flex flex-col items-center">
                    <Eye size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">Transparencia</span>
                    <p className="text-sm text-gray-600 text-center">Historial de accesos disponible para gerentes y residentes.</p>
                </div>

                {/* App Móvil */}
                <div className="flex flex-col items-center">
                    <Smartphone size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">App Móvil</span>
                    <p className="text-sm text-gray-600 text-center">Gestiona accesos, permisos y visitantes desde tu celular.</p>
                </div>

                {/* Reservas */}
                <div className="flex flex-col items-center">
                    <Vote size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">Reservas de Áreas Comunes</span>
                    <p className="text-sm text-gray-600 text-center">Reserva áreas comunes desde la app y mantén la organización del edificio.</p>
                </div>

                {/* Gestión de Seguridad */}
                <div className="flex flex-col items-center">
                    <ShieldCheck size={40} className="text-blue-600" />
                    <span className="mt-2 font-semibold">Alertas y Notificaciones</span>
                    <p className="text-sm text-gray-600 text-center">Crea alertas, recibe notificaciones y reporta incidentes en la comunidad.</p>
                </div>
            </div>
            {/* Cámara con IA */}
            <div className="flex flex-col items-center py-3">
                            <Camera size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Cámara con IA</span>
                            <p className="text-sm text-gray-600 text-center">Escanea QR automáticamente y abre la puerta sin asistencia.</p>
                        </div>
        </div>
    );
};

export default FeaturesSection;
