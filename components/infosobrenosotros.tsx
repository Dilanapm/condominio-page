import Image from "next/image";

const TrialSection = () => {
    return (
        <section className="bg-white py-12 px-6 text-center">
            {/* Contenido principal */}
            <div className="max-w-5xl mx-auto">
                {/* Logo y texto de invitación */}
                <Image src="/avatar-3.png" alt="Logo CondoVive" width={300} height={600} className="mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">¡Pruébalo 30 días y descubre CondoVive!</h1>
                <p className="text-gray-600 mt-2">Únete a las miles de personas que ahorran tiempo y organizan sus propiedades con CondoVive.</p>

                {/* Botones de acción */}
                <div className="mt-5 flex flex-col md:flex-row justify-center gap-4">
                    <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
                        Comienza ahora
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition">
                        Déjanos tus datos
                    </button>
                </div>

                {/* Botones de descarga */}
                <div className="mt-6 flex justify-center gap-4">
                    <Image src="/imgapplestore.webp" alt="Descargar en App Store" width={190} height={10} />
                    <Image src="/imgplaystore.webp" alt="Disponible en Google Play" width={130} height={80} />
                </div>
            </div>

            {/* Línea divisoria */}
            <hr className="border-gray-300 my-8" />

            {/* Información de contacto */}
            <div className="grid md:grid-cols-4 gap-6 text-gray-600 text-sm">
                {/* Contacto */}
                <div>
                    <h3 className="font-semibold text-gray-900">Contacto</h3>
                    <p>📞 (+591) 77204038</p>
                    <p>📧 contacto@TechForge.com</p>
                    <p>📍 Irpavi calle 2 - 206, La Paz, Bolivia</p>
                </div>

                {/* CondoVive */}
                <div>
                    <h3 className="font-semibold text-gray-900">TechForge</h3>
                    <p>Ayuda</p>
                    <p>Seguridad</p>
                    <p>Política de respaldo</p>
                </div>

                {/* Nosotros */}
                <div>
                    <h3 className="font-semibold text-gray-900">Nosotros</h3>
                    <p>Oportunidades</p>
                </div>

                {/* Recursos */}
                <div>
                    <h3 className="font-semibold text-gray-900">Recursos</h3>
                    <p>Blog</p>
                </div>
            </div>
        </section>
    );
};

export default TrialSection;
