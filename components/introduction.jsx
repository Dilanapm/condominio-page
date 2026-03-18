import Image from "next/image";
import Link from "next/link"; // Usar Next.js para navegación
import { TypeAnimation } from 'react-type-animation';
// bg-darkBg/60
import ContainerPage from "@/components/container-page";
import FeatureSection from "@/components/FeaturesSection"
const Introduction = () => {
    return (
        <div>
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            TorreSegura le brinda<br />
                            <TypeAnimation
                                sequence={[
                                    'Mejor Seguridad',
                                    1000,
                                    'Integración con IA',
                                    1000,
                                    'Monitoreo en Tiempo Real',
                                    1000,
                                    'Control de Accesos',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> ayuda a la seguridad y gestión de accesos en condominios verticales mediante inteligencia artificial y control digital, garantizando un entorno seguro, eficiente y moderno.
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5 pb-10">
                            <Link href="/contact-us">
                                <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md
                            mb-5
                            text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                    Contáctanos
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Imagen optimizada */}
                    <Image
                        src="/edificio.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Avatar"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            <div className="py-10">
            <FeatureSection />
            </div>
            
        </div>
    );
}

export default Introduction;