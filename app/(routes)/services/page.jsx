"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import ContainerPage from "@/components/container-page";
import ServiceFeature from "@/components/ServiceSection";

import { CoverParticles } from "@/components/cover-particles";
const SECTIONS = [
    {
        id: 1,
        content: (
            <ContainerPage>
                <TransitionPage />
                {/* Contenedor principal completamente centrado */}
                <div className="flex flex-col justify-center items-center min-h-[calc(100vh-150px)] px-6 relative z-10">
                    <div className="grid items-center justify-center max-w-5xl gap-8 md:gap-14 mx-auto w-full md:grid-cols-2 md:flex md:flex-col">

                        {/* Sección de texto optimizada */}
                        <div className="text-center md:text-left order-2 md:order-1 items-center">
                            <h1 className="text-2xl leading-tight md:text-4xl md:mb-5 text-center">
                                Características de nuestro <span className="font-bold text-secondary">servicio de seguridad.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300">
                                Ofrecemos un <strong>sistema inteligente de gestión y seguridad</strong> diseñado para condominios,
                                proporcionando control de acceso avanzado, monitoreo en tiempo real y alertas automáticas.
                            </p>
                        </div>

                        {/* Slider de servicios - Ajustado para evitar espacios extra */}
                        <div className="order-1 md:order-2 w-full flex justify-center">
                            <SliderServices />
                        </div>
                    </div>

                    {/* Botón centrado */}
                    <div className="flex justify-center md:justify-start mt-6">
                        <Link href="/contact-us">
                            <button className="px-5 py-3 text-lg font-semibold rounded-lg bg-secondary hover:bg-secondary/80 transition">
                                Contáctanos
                            </button>
                        </Link>
                    </div>
                </div>
            </ContainerPage>
        ),
    },
    {
        id: 2,
        content: (
            <ContainerPage>
                <ServiceFeature
                    title="Acceso rápido"
                    subtitle="ACCESO"
                    description="Escanea con tu App el código QR de los visitantes, automáticamente tendrás el teléfono del anfitrión y podrás iniciar la llamada directamente desde tu celular. Captura fotos, registra comentarios y ten el control de accesos en la nube en todo momento."
                    imageUrl="/imgapp1.webp"
                    imageAlt="Acceso rápido con QR"
                />
            </ContainerPage>
        ),
    },
    {
        id: 3,
        content: (
            <ContainerPage>
                <ServiceFeature
                    title="Monitoreo en tiempo real"
                    subtitle="SEGURIDAD"
                    description="Nuestra tecnología avanzada permite visualizar el acceso en tiempo real desde cualquier dispositivo, brindando control total sobre la seguridad del condominio."
                    imageUrl="/imgapp2.webp"
                    imageAlt="Monitoreo en tiempo real"
                    reverse
                    imageSize="big"
                />
            </ContainerPage>
        ),
    },
    {
        id: 4,
        content: (
            <ContainerPage>
                <ServiceFeature
                    title="Control y reportes"
                    subtitle="GESTIÓN EFICIENTE"
                    description="Accede a reportes detallados sobre accesos, visitas y seguridad del condominio con nuestro sistema de gestión avanzada."
                    imageUrl="/imgapp3.webp"
                    imageAlt="Reportes de seguridad"
                />
            </ContainerPage>
        ),
    },
    {
        id: 5,
        content: (
            <ContainerPage>
                <ServiceFeature
                    title="Reconocimiento de movimiento en zonas no autorizadas"
                    subtitle="GESTIÓN EFICIENTE"
                    description="Accede a reportes detallados sobre accesos, visitas y seguridad del condominio con nuestro sistema de gestión avanzada."
                    imageUrl="/imgapp4.webp"
                    imageAlt="Reportes de seguridad"
                    imageSize="big"
                />
            </ContainerPage>
        ),
    },  
];

const ServicesPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % SECTIONS.length);
        }, 15000); // Cambia de sección cada 15 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {/* <CoverParticles/> */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="w-full h-screen"
            >
                {SECTIONS[activeIndex].content}
            </motion.div>
        </AnimatePresence>
    );
};

export default ServicesPage;
