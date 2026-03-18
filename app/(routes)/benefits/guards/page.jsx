"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { QrCode, Eye, ShieldCheck, Bell } from "lucide-react";
import ContainerPage from "@/components/container-page";
import ServiceFeature from "@/components/ServiceSection";

export default function GuardBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16 py-20 mt-0 sm:mt-10 md:mt-10 lg:mt-20">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            👷 Personal del Condominio (Vigilante)<br />
                            <TypeAnimation
                                sequence={[
                                    'Control de accesos con QR',
                                    1000,
                                    'Registro de movimientos y alertas',
                                    1000,
                                    'Mayor seguridad en el ingreso',
                                    1000,
                                    'Tecnología con inteligencia artificial',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> equipa al <strong>personal</strong> con herramientas modernas para gestionar accesos. El cargo <strong>Vigilante</strong> tiene privilegios clave: escanear QR de residentes y visitas, registrar movimientos y emitir alertas desde una sola vista.
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5 pb-10">
                            <Link href="/contact-us">
                                <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md mb-5 text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                    Contáctanos
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Imagen del personal */}
                    <Image
                        src="/qr-code.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Personal del condominio"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div>
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Beneficios para el Personal
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Aumenta la eficacia del ingreso y centraliza accesos y alertas (especialmente para el rol Vigilante).
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-gray-800">
                        {/* Escaneo con QR */}
                        <div className="flex flex-col items-center">
                            <QrCode size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Escaneo QR (Vigilante)</span>
                            <p className="text-sm text-gray-600 text-center">Valida accesos de residentes y visitas en segundos.</p>
                        </div>

                        {/* Registro y alertas */}
                        <div className="flex flex-col items-center">
                            <Bell size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Movimientos y Alertas</span>
                            <p className="text-sm text-gray-600 text-center">Registra eventos y genera alertas de forma rápida.</p>
                        </div>

                        {/* Seguridad y control */}
                        <div className="flex flex-col items-center">
                            <ShieldCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Monitoreo y Control</span>
                            <p className="text-sm text-gray-600 text-center">Evita ingresos no autorizados con registro automático.</p>
                        </div>

                    </div>


                </div>
            </div>
            <div className="mt-10 sm:mt-0 md:mt-0 lg:mt-0">
                <ContainerPage>
                    <ServiceFeature
                        title="Acceso rápido"
                        subtitle="ACCESO"
                        description="Escanea con tu App el código QR de los visitantes, automáticamente tendrás el teléfono del anfitrión y directamente desde tu celular. Captura fotos, registra y ten el control de accesos en la nube en todo momento."
                        imageUrl="/scan-qr.webp"
                        imageAlt="Acceso rápido con QR"
                        imageSize="small"
                    />
                </ContainerPage>
            </div>
            <div className="mt-10 sm:mt-0 md:mt-0 lg:mt-0">
                <ContainerPage>
                    <ServiceFeature
                        title="Monitoreo en tiempo real"
                        subtitle="SEGURIDAD"
                        description="Nuestra tecnología avanzada te permite visualizar el acceso en tiempo real, brindando control total sobre la seguridad del condominio."
                        imageUrl="/regis.webp"
                        imageAlt="Monitoreo en tiempo real"
                        reverse
                        imageSize="small"
                    />
                </ContainerPage>

            </div>
            <div className="mt-10 sm:mt-0 md:mt-0 lg:mt-0">
                <ContainerPage>
                    <ServiceFeature
                        title="Gestión fácil y eficiente"
                        subtitle="PERSONAL (VIGILANTE)"
                        description="El personal del edificio cuenta con una interfaz intuitiva. En particular, el rol Vigilante puede gestionar accesos, escanear códigos QR de residentes y visitas, y registrar movimientos y alertas de manera rápida y efectiva desde un solo lugar."
                        imageUrl="/int-guards.webp" // Asegúrate de tener esta imagen en public/
                        imageAlt="Interfaz del personal"
                        imageSize="small"
                    />
                </ContainerPage>
            </div>
        </div>
    );
}
