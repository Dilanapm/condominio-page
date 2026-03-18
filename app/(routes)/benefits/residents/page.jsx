"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { QrCode, Bell, CreditCard, CalendarCheck } from "lucide-react";
import ContainerPage from "@/components/container-page";
import ServiceFeature from "@/components/ServiceSection";

export default function ResidentsBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            🏠 Residente (Propietario y Copropietario)<br />
                            <TypeAnimation
                                sequence={[
                                    'Invitaciones con QR',
                                    1000,
                                    'Pago de expensas',
                                    1000,
                                    'Alertas y notificaciones',
                                    1000,
                                    'Reservas de áreas comunes',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> permite al residente, desde la app móvil, <strong>pagar expensas</strong>, <strong>crear alertas</strong>, recibir notificaciones de la comunidad, <strong>reservar áreas comunes</strong> y generar <strong>invitaciones con QR</strong> para sus visitantes.
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

                    {/* Imagen optimizada */}
                    <Image
                        src="/resident.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Residente feliz"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div className="pb-10">
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Beneficios para Residentes
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Disfruta de la libertad y seguridad que TorreSegura te brinda para controlar tu ingreso y el de tus visitantes.
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-gray-800">
                        {/* Invitaciones con QR */}
                        <div className="flex flex-col items-center">
                            <QrCode size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Invitaciones con QR</span>
                            <p className="text-sm text-gray-600 text-center">Genera un QR para tu visitante y compártelo desde tu celular.</p>
                        </div>

                        {/* Pago de expensas */}
                        <div className="flex flex-col items-center">
                            <CreditCard size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Pago de Expensas</span>
                            <p className="text-sm text-gray-600 text-center">Paga tus expensas desde la app con el QR provisto por el gerente (entidad bancaria).</p>
                        </div>

                        {/* Alertas y notificaciones */}
                        <div className="flex flex-col items-center">
                            <Bell size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Alertas</span>
                            <p className="text-sm text-gray-600 text-center">Crea alertas y recibe notificaciones de alertas de otros residentes.</p>
                        </div>

                        {/* Reservas */}
                        <div className="flex flex-col items-center">
                            <CalendarCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Reservas</span>
                            <p className="text-sm text-gray-600 text-center">Reserva áreas comunes directamente desde la aplicación.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="mt-0 sm:mt-10 md:mt-20">
                <ContainerPage>
                    <ServiceFeature
                        title="Invitaciones de visitantes con QR"
                        subtitle="RESIDENTES"
                        description="Como residente, puedes generar invitaciones con códigos QR para tus visitantes y compartirlas al instante. Además, puedes gestionar expensas, alertas, notificaciones y reservas de áreas comunes desde la app móvil."
                        imageUrl="/gen-qr.webp"
                        imageAlt="Monitoreo y control para residentes"
                        reverse
                        imageSize="small"
                    />
                </ContainerPage>
            </div>
        </div>
    );
}
