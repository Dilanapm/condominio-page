"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Para animaciones
import { Menu, X, ShieldCheck, Users, Briefcase } from "lucide-react";
import Image from "next/image";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [benefitsOpen, setBenefitsOpen] = useState(false);
    const timeoutRef = useRef(null); // Para manejar el retraso en cierre

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const toggleBenefits = () => setBenefitsOpen((prev) => !prev);

    // Manejo dinámico del cierre del menú en escritorio con retraso
    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setBenefitsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setBenefitsOpen(false);
        }, 200); // Retraso de 200ms para evitar cierres accidentales
    };

    // Limpiar timeout al desmontar el componente
    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    // Variantes para animaciones con Framer Motion
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 bg-secondary bg-opacity-90 backdrop-blur-md shadow-md h-16 sm:h-16 md:h-20"
        >
            <header className="w-full h-full flex items-center justify-between px-6 md:px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[50px] md:w-[70px] md:h-[60px] lg:w-[75px] lg:h-[70px]">
                        <Image
                            src="/logo_ofi.webp"
                            fill
                            sizes="(max-width: 640px) 60px, (max-width: 768px) 70px, (max-width: 1024px) 75px, 100px"
                            className="rounded-xl object-contain"
                            alt="TorreSegura Logo"
                            priority
                        />
                    </div>
                    <span className="text-white text-lg sm:text-md md:text-lg lg:text-xl font-semibold">TorreSegura</span>
                </Link>

                {/* Menú */}
                <div className="flex items-center gap-6">
                    {/* Botón Menú en móviles */}
                    <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </ button>

                    {/* Navegación en escritorio */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link href="/" className="text-white text-xl hover:text-gray-600 transition">
                            Inicio
                        </Link>

                        {/* Menú de Beneficios */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                className="text-white text-xl  hover:text-gray-600 transition flex items-center focus:outline-none"
                                onClick={toggleBenefits}
                                aria-expanded={benefitsOpen}
                                aria-haspopup="true"
                            >
                                Beneficios ▼
                            </button>

                            {/* Dropdown Beneficios en Desktop */}
                            <AnimatePresence>
                                {benefitsOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute left-0 top-full pt-2 z-50"
                                    >
                                        <div className="absolute w-full h-2 top-0 left-0" />
                                        <div className="w-[400px] bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4">
                                            <Link
                                                href="/benefits/administrators"
                                                className="block bg-green-200/40 rounded-lg p-2 hover:bg-green-200 transition-all duration-200"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                        <Briefcase size={18} className="text-green-600" />
                                                        Administradores
                                                    </div>
                                                    <p className="text-gray-500 text-sm mt-1">
                                                        Gestión eficiente, transparencia y comunicación.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href="/benefits/residents"
                                                className="block bg-blue-200/40 rounded-lg p-2 hover:bg-blue-200 transition-all duration-200"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                        <Users size={18} className="text-blue-600" />
                                                        Residentes
                                                    </div>
                                                    <p className="text-gray-500 text-sm mt-1">
                                                        Información organizada en un solo lugar.
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link
                                                href="/benefits/guards"
                                                className="block bg-yellow-200/40 rounded-lg p-2 hover:bg-yellow-200 transition-all duration-200"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                        <ShieldCheck size={18} className="text-yellow-600" />
                                                        Guardias
                                                    </div>
                                                    <p className="text-gray-500 text-sm mt-1">
                                                        Acceso rápido a visitas QR y reportes.
                                                    </p>
                                                </div>
                                            </Link>
                                            {/* <Link
                                                href="#"
                                                className="block bg-purple-200/40 rounded-lg p-2 hover:bg-purple-200/70 transition-all duration-200"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                        <UserCheck size={18} className="text-purple-600" />
                                                        Recepcionistas
                                                    </div>
                                                    <p className="text-gray-500 text-sm mt-1">
                                                        Control de accesos y visitas en tiempo real.
                                                    </p>
                                                </div>
                                            </Link> */}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/prices" className="text-white text-xl hover:text-gray-600 transition">
                            Precios
                        </Link>
                        <Link href="/contact-us" className="text-white text-xl hover:text-gray-600 transition">
                            Contáctanos
                        </Link>
                    </nav>

                    {/* Botón de Ingresar */}
                    <Link
                        href="https://mysite-tlxb.onrender.com/users/login"
                        target="_blank"
                        className="hidden md:block px-4 py-2 bg-buttonBg text-black font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                        Ingresar
                    </Link>
                </div>
            </header>

            {/* Menú desplegable en móviles */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute left-0 w-full bg-secondary/80 backdrop-blur-md shadow-md py-4 flex flex-col items-center gap-4"
                    >
                        <Link
                            href="/"
                            className="text-white hover:text-gray-600 transition"
                            onClick={toggleMenu}
                        >
                            Inicio
                        </Link>

                        {/* Beneficios en móviles */}
                        <div className="w-full text-center">
                            <button
                                className="text-white hover:text-gray-600 transition flex items-center justify-center w-full"
                                onClick={toggleBenefits}
                                aria-expanded={benefitsOpen}
                                aria-haspopup="true"
                            >
                                Beneficios ▼
                            </button>

                            <AnimatePresence>
                                {benefitsOpen && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="w-[90%] mx-auto bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 mt-2"
                                    >
                                        <Link
                                            href="/benefits/administrators"
                                            className="block bg-green-200/40 rounded-lg p-2 hover:bg-green-200 transition-all"
                                        >
                                            <div className="text-gray-700 font-bold">Administradores</div>
                                            <p className="text-gray-500 text-sm">
                                                Gestión eficiente y comunicación.
                                            </p>
                                        </Link>
                                        <Link
                                            href="/benefits/residents"
                                            className="block bg-blue-200/40 rounded-lg p-2 hover:bg-blue-200 transition-all"
                                        >
                                            <div className="text-gray-700 font-bold">Residentes</div>
                                            <p className="text-gray-500 text-sm">
                                                Información organizada en un solo lugar.
                                            </p>
                                        </Link>
                                        <Link
                                            href="/benefits/guards"
                                            className="block bg-yellow-200/40 rounded-lg p-2 hover:bg-yellow-200 transition-all"
                                        >
                                            <div className="text-gray-700 font-bold">Guardias</div>
                                            <p className="text-gray-500 text-sm">
                                                Acceso rápido a visitas QR y reportes.
                                            </p>
                                        </Link>
                                        {/* <Link
                                            href="#"
                                            className="block bg-purple-200/40 rounded-lg p-2 hover:bg-purple-200/70 transition-all"
                                        >
                                            <div className="text-gray-700 font-bold">Recepcionistas</div>
                                            <p className="text-gray-500 text-sm">
                                                Control de accesos y visitas en tiempo real.
                                            </p>
                                        </Link> */}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/prices"
                            className="text-white hover:text-gray-600 transition"
                            onClick={toggleMenu}
                        >
                            Precios
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-white hover:text-gray-600 transition"
                            onClick={toggleMenu}
                        >
                            Contáctanos
                        </Link>
                        <Link
                            href="https://mysite-tlxb.onrender.com/users/login"
                            target="_blank"
                            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                            onClick={toggleMenu}
                        >
                            Ingresar
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Header;