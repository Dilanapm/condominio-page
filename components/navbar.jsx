"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition position="right" className="fixed z-50 flex flex-col items-center justify-center w-full mt-auto bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
                            data-tooltip-target="tooltip-default">
                            <Link href={item.link}>{item.icon} </Link>
                        </div>
                    ))}
                </div>
            </nav>
 
        </MotionTransition>
    );
}

export default Navbar;
