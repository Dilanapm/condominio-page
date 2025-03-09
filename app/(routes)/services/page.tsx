import TransitionPage from "@/components/transition-page";
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import ServiceFeature from "@/components/ServiceSection";
import InfosobreNosotros from "@/components/infosobrenosotros";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />

            {/* Sección de Introducción */}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Nuestros <span className="font-bold text-secondary">servicios.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrecemos un <strong>sistema inteligente de gestión y seguridad </strong> diseñado para condominios,
                        proporcionando <strong>control de acceso avanzado, monitoreo en tiempo real y alertas automáticas</strong>
                        para garantizar la protección de residentes y visitantes. Utilizando tecnologías como
                        <strong> visión artificial, reconocimiento de identidad y reportes digitales</strong>, optimizamos la
                        seguridad y eficiencia en la administración del condominio .
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                        Contacta conmigo
                    </button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>

            {/* Sección 1: Acceso Rápido */}
            <ServiceFeature 
                title="Acceso rápido y"
                subtitle="ACCESO"
                description="Escanea con tu App el código QR de los visitantes, automáticamente tendrás el teléfono del anfitrión y podrás iniciar la llamada directamente desde tu celular. Captura fotos, registra comentarios y ten el control de accesos en la nube en todo momento."
                imageUrl="/imgapp1.webp"
                imageAlt="Acceso rápido con QR"
            />

            {/* Sección 2: Monitoreo en tiempo real */}
            <ServiceFeature 
                title="Monitoreo en tiempo real y"
                subtitle="SEGURIDAD"
                description="Nuestra tecnología avanzada permite visualizar el acceso en tiempo real desde cualquier dispositivo, brindando control total sobre la seguridad del condominio."
                imageUrl="/imgapp2.webp"
                imageAlt="Monitoreo en tiempo real"
                reverse
                imageSize="big"
            />

            {/* Sección 3: Control y reportes */}
            <ServiceFeature 
                title="Control y reportes"
                subtitle="GESTIÓN EFICIENTE"
                description="Accede a reportes detallados sobre accesos, visitas y seguridad del condominio con nuestro sistema de gestión avanzada."
                imageUrl="/imgapp3.webp"
                imageAlt="Reportes de seguridad"
            />
            
            {/* Sección 3: Reconociiento de movimiento de personas en lugares no autorizados */}
            <ServiceFeature 
                title="Reconociiento de movimiento de personas en lugares no autorizados"
                subtitle="GESTIÓN EFICIENTE"
                description="Accede a reportes detallados sobre accesos, visitas y seguridad del condominio con nuestro sistema de gestión avanzada."
                imageUrl="/imgapp4.webp"
                imageAlt="Reportes de seguridad"
                imageSize="big"
            />


            
              <InfosobreNosotros />
        
        </>

    );
};

export default ServicesPage;
