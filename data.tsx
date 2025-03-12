import { 
    BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, 
    Crop, Pencil, Computer, Book, Rocket, Speech, Shield, Camera, Key, 
    BarChart3 as Graph, LifeBuoy as Support 
  } from "lucide-react";
  

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/tech-forge-b7a9a2354/",
    },
    {
        id: 2,
        logo: <Youtube size={30} strokeWidth={1} />,
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
        link: "/about-us",
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
        link: "/clients",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact-us",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Sistema Inteligente de Gestión y Seguridad para Condominios",
        subtitle: "Transformando la Seguridad y la Administración de Condominios",
        description: "Nuestro sistema ofrece una plataforma IoT avanzada para mejorar la seguridad y eficiencia en la gestión de condominios. Desde control de accesos con reconocimiento facial hasta automatización de procesos administrativos, integramos tecnología de vanguardia para ofrecer una experiencia segura y optimizada a los residentes y administradores.",
        date: "2024",
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
        endCounter: 1,
        text: "Años de desarrollo e investigación",
        lineRight: true,
        lineRightMobile: true,
    },

    {
        id: 1,
        endCounter: 80,
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
        text: "Premios ganadores",
        endCounter: 1,
        lineRight: false,
        lineRightMobile: false,
    },
];


export const serviceData = [
    {
        icon: <HomeIcon />,
        title: "Administración de Condominios",
        description: "Gestión integral de condominios, incluyendo mantenimiento, pagos y control de residentes.",
    },
    {
        icon: <UserRound />,
        title: "Control de Residentes",
        description: "Registro y administración de propietarios e inquilinos con acceso seguro a información relevante.",
    },
    {
        icon: <Graph />,
        title: "Gestión de Pagos",
        description: "Administración de cuotas, generación de estados de cuenta y control de pagos en línea.",
    },
    {

        icon: <Camera />,
        title: "Monitoreo con IA",
        description: "Uso de visión artificial para la detección de movimientos sospechosos, reconocimiento facial y reportes automáticos de seguridad.",
    },
    {
        icon: <Speech />,
        title: "Notificaciones y Comunicaciones",
        description: "Envío de avisos, recordatorios y noticias a los residentes de manera rápida y eficiente.",
    },
    {
        icon: <Graph />,
        title: "Reportes y Estadísticas",
        description: "Generación de reportes digitales con datos en tiempo real para mejorar la administración y seguridad del condominio.",
    },
    {
        icon: <Key />,
        title: "Gestión de Llaves y Accesos",
        description: "Control y administración de llaves digitales y accesos restringidos en el condominio.",
    },
    {
        icon: <Support />,
        title: "Soporte y Atención al Cliente",
        description: "Atención y solución de problemas relacionados con la administración del condominio.",
    },  
    {icon: <Support />,
        title: "Soporte 24/7",
        description: "Atención y mantenimiento continuo para garantizar un funcionamiento óptimo del sistema en todo momento.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Condominio Santa Cruz De La Colina",
        image: "/condominio-santacruz-de-la-colina.webp",
        urlGithub: "https://www.facebook.com/condominio.scdelacolina/?locale=es_LA",
        urlDemo: "https://www.instagram.com/explore/locations/297766866/condominio-santa-cruz-de-la-colina-urubo-santa-cruz/?next=%2Finikelawar%2Ffeed%2F&hl=es-la",
    },
    {
        id: 2,
        title: "Condominio Trii",
        image: "/trii-condo.webp",
        urlGithub: "https://www.facebook.com/TriiiDepartamentos/?locale=es_LA",
        urlDemo: "https://www.instagram.com/triii_departamentos/",
    },
    {
        id: 3,
        title: "Jardines del Urubó",
        image: "/jardines-urubo.webp",
        urlGithub: "https://www.facebook.com/jdelurubo/?locale=es_LA",
        urlDemo: "https://www.facebook.com/jdelurubo/?locale=es_LA",
    },
    {
        id: 4,
        title: "Condominios Sevilla",
        image: "/condo-sevilla.webp",
        urlGithub: "https://www.facebook.com/CondominiosSevilla?locale=es_LA",
        urlDemo: "https://www.waze.com/es-419/live-map/directions/condominio-sevilla-el-bosque-santa-cruz-de-la-sierra?to=place.w.194578007.1945517928.10604519",
    },
    {
        id: 5,
        title: "Condominio La Hacienda",
        image: "/condo-la-hacienda.webp",
        urlGithub: "https://www.facebook.com/CondominioLaHaciendadelUrubo/?locale=es_LA",
        urlDemo: "https://www.ultracasas.com/inmueble/casa-en-venta-entre-5to-y-6to-anillo-norte-santa-cruz-de-la-sierra-565890",
    },
    {
        id: 6,
        title: "Condominio Zero",
        image: "/condo-zero-improvisado.webp",
        urlGithub: "https://condominio-zero-santa-cruz-de-la-sierra.santacruztophotels.com/es/",
        urlDemo: "https://condominio-zero-santa-cruz-de-la-sierra-bo-4.hotelmix.es/",
    },
    {
        id: 7,
        title: "Condominio la cazona ",
        image: "/condo-la-casona.webp",
        urlGithub: "https://condominio-la-casona.santacruztophotels.com/es/",
        urlDemo: "https://es.wikipedia.org/wiki/La_Casona_(Bolivia)",
    },
    {
        id: 8,
        title: "Condominio vista verde",
        image: "/condo-vista-verde.webp",
        urlGithub: "https://www.facebook.com/UrbVistaVerde/?locale=es_LA",
        urlDemo: "https://www.waze.com/es/live-map/directions/condominio-vista-verde-av.-radial-19-santa-cruz-de-la-sierra?to=place.w.194512470.1944993629.1981587",
    }
];
export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];