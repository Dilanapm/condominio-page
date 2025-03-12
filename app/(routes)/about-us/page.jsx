"use client";

import { ImageDisplay } from "@/components/ImageDisplay";  
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";
const AboutUsPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <CoverParticles/>
                {/* Contenedor principal centrado y responsivo */}
                <div className="flex flex-col justify-center items-center min-h-[calc(100vh-150px)] text-center">

                    {/* Sección de texto */}
                    <div className="w-full max-w-lg">
                        <h1 className="text-2xl leading-tight md:text-4xl lg:text-5xl font-bold">
                            Toda nuestra <span className="text-secondary">tractoria profesional</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mt-4">
                            Innovación y tecnología al servicio de la seguridad y gestión de condominios.
                        </p>
                    </div>

                    {/* Sección de imagen y contador en móviles */}
                    <div className="flex flex-col items-center lg:flex-row">
                        {/* Avatar - Se adapta en pantallas grandes */}
                        <div className="w-[200px] md:w-[300px] flex justify-center">
                            <Avatar />
                        </div>

                        
                    </div>
                    {/* Contador de Servicios */}
                    <div className="w-full max-w-md">
                            <CounterServices />
                        </div>
                </div>
            </ContainerPage>
        </>
    );
}

export default AboutUsPage;
