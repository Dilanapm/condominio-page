"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import Image from "next/image";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="fixed top-0 left-0 w-full z-50 bg-secondary/60 bg-opacity-90 backdrop-blur-md shadow-md h-20">
            <header className="w-full h-full flex items-center px-6 md:px-10">
                {/* Logo y Nombre */}
                <Link href="/" className="flex items-center">
                    <h1 className="font-bold text-2xl">Tech<strong>Forge</strong></h1>
                </Link>

                {/* Redes Sociales y Botón de Ingresar */}
                <div className="flex items-center justify-end gap-5 md:gap-7 ml-auto">
                    {/* Botón de Ingresar */}
                    <Link 
                        href="https://mysite-tlxb.onrender.com/users/login" 
                        target="_blank"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Ingresar
                    </Link>
                </div>
            </header>
        </MotionTransition>
    );
};

export default Header;
