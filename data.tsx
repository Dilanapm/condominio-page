import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />, 
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />, 
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />, 
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />, 
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />, 
        src: "#!",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />, 
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />, 
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />, 
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />, 
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />, 
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Sistema Inteligente de Gestión y Seguridad para Condominios",
        subtitle: "Transformando la Seguridad y la Administración de Condominios",
        description: "Nuestro sistema ofrece una plataforma IoT avanzada para mejorar la seguridad y eficiencia en la gestión de condominios. Desde control de accesos con reconocimiento facial hasta automatización de procesos administrativos, integramos tecnología de vanguardia para ofrecer una experiencia segura y optimizada a los residentes y administradores.",
        date: "2024 - Presente",
    },
    {
        id: 2,
        title: "Seguridad Avanzada con IoT",
        subtitle: "Monitoreo en Tiempo Real y Control de Accesos",
        description: "Implementamos cámaras inteligentes, sensores y reconocimiento facial para garantizar la seguridad en los accesos. Todo gestionado desde una aplicación móvil intuitiva.",
        date: "2024",
    },
    {
        id: 3,
        title: "Automatización Administrativa",
        subtitle: "Facilitando la Gestión de Condominios",
        description: "Desde la administración de pagos hasta la comunicación con residentes, nuestra plataforma digitaliza y optimiza todos los procesos administrativos, reduciendo costos y tiempos de gestión.",
        date: "2024",
    },
    {
        id: 4,
        title: "Tecnología para el Futuro",
        subtitle: "Innovación y Eficiencia en la Vida Condominial",
        description: "Nos enfocamos en la integración de tecnologías emergentes como inteligencia artificial, machine learning y blockchain para garantizar la seguridad y transparencia en la administración de condominios.",
        date: "2024",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de desarrollo e investigación",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 50,
        text: "Condominios beneficiados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 1000,
        text: "Usuarios protegidos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20,
        text: "Premios y reconocimientos",
        lineRight: false,
        lineRightMobile: false,
    },
];