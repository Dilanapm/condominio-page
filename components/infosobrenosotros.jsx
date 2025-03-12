import Image from "next/image";
import ContainerPage from "@/components/container-page";

const TrialSection = () => {
    return (
        <ContainerPage>
            <div className="flex flex-col justify-center items-center min-h-screen px-6 text-center">
                {/* Contenedor principal */}
                <div className="max-w-5xl mx-auto">
                    {/* Imagen Avatar */}
                    <Image src="/avatar-3.png" alt="Logo TechForge" width={300} height={600} className="mx-auto mb-6" />

                    {/* Título y subtítulo */}
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        ¡Pruébalo 30 días y descubre <span className="text-secondary">CondoVive!</span>
                    </h1>
                    <p className="text-gray-300 mt-2 text-lg md:text-xl">
                        Únete a las miles de personas que ahorran tiempo y organizan sus propiedades con CondoVive.
                    </p>

                    {/* Botones de acción */}
                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
                            Comienza ahora
                        </button>
                        <button className="px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition">
                            Déjanos tus datos
                        </button>
                    </div>

                    {/* Botones de descarga */}
                    <div className="mt-8 flex justify-center gap-4">
                        <Image src="/imgapplestore.webp" alt="Descargar en App Store" width={190} height={10} />
                        <Image src="/imgplaystore.webp" alt="Disponible en Google Play" width={130} height={80} />
                    </div>
                </div>

                {/* Línea divisoria */}
                <hr className="border-gray-600 w-full max-w-4xl my-8" />

                {/* Información de contacto - Diseño responsivo */}
                <div className="grid md:grid-cols-4 gap-6 text-gray-400 text-sm w-full max-w-5xl">
                    {/* Contacto */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Contacto</h3>
                        <p>📞 (+591) 77204038</p>
                        <p>📧 contacto@TechForge.com</p>
                        <p>📍 Irpavi calle 2 - 206, La Paz, Bolivia</p>
                    </div>

                    {/* TechForge */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">TechForge</h3>
                        <p>Ayuda</p>
                        <p>Seguridad</p>
                        <p>Política de respaldo</p>
                    </div>

                    {/* Nosotros */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Nosotros</h3>
                        <p>Oportunidades</p>
                    </div>

                    {/* Recursos */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Recursos</h3>
                        <p>Blog</p>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default TrialSection;
