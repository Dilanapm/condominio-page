"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ShieldCheck, UserCheck, LogIn, QrCode } from "lucide-react";

export default function GerentesBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            🏢 Gerente del Edificio<br />
                            <TypeAnimation
                                sequence={[
                                    "Gestión de residentes y personal",
                                    1000,
                                    "Gestión de expensas",
                                    1000,
                                    "Monitoreo y reportes",
                                    1000,
                                    "Control de accesos",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> brinda herramientas para que el <strong>Gerente</strong> administre su edificio: registra residentes y personal, controla accesos, revisa reportes y gestiona expensas por unidad funcional.
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
                        src="/admin_happy.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Gerente del edificio"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div className="py-10">
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Beneficios para el Gerente del Edificio</h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Controla la operación del edificio desde una sola plataforma, con foco en accesos, personal, residentes y expensas.
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-gray-800">
                        <div className="flex flex-col items-center">
                            <ShieldCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Control de Accesos</span>
                            <p className="text-sm text-gray-600 text-center">Supervisa quién entra o sale del edificio fácilmente.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <UserCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Registro de Personal y Residentes</span>
                            <p className="text-sm text-gray-600 text-center">Administra altas/bajas de residentes y empleados del edificio.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <LogIn size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Monitoreo y Reportes</span>
                            <p className="text-sm text-gray-600 text-center">Consulta accesos y actividad del edificio en tiempo real.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <QrCode size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Expensas y Cobros</span>
                            <p className="text-sm text-gray-600 text-center">Define el monto por unidad funcional y carga el QR bancario (tercero) para el pago.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
