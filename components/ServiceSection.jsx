import PropTypes from "prop-types";
import Image from "next/image";

const ServiceFeature = ({ 
    title, 
    subtitle, 
    description, 
    imageUrl, 
    imageAlt, 
    reverse = false, 
    imageSize = "medium" 
}) => {
    // Clases para definir diferentes tamaños de imagen
    const imageClasses = {
        small: "w-[250px] md:w-[300px]",  // Tamaño pequeño
        medium: "w-[350px] md:w-[400px]", // Tamaño mediano (default)
        large: "w-[450px] md:w-[550px]",  // Tamaño grande
        big: "w-[550px] md:w-[650px]",    // Tamaño extra grande
    };

    return (
        <section className={`flex flex-col items-center justify-center min-h-screen px-6 md:flex-row md:gap-12 max-w-6xl mx-auto ${reverse ? 'md:flex-row-reverse' : ''}`}>
            {/* Texto */}
            <div className="max-w-[500px] text-center md:text-left">
                <h3 className="text-sm font-semibold uppercase text-gray-300 mb-2">{subtitle}</h3>
                <h1 className="text-3xl font-bold leading-tight md:text-5xl text-gray-200">
                    {title}
                </h1>
                <p className="mt-4 text-lg text-gray-400">{description}</p>
                <button className="px-5 py-3 mt-5 font-semibold rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white">
                    Más información
                </button>
            </div>

            {/* Imagen */}
            <div className="relative flex justify-center">
                <Image 
                    src={imageUrl}
                    alt={imageAlt}
                    width={500} // Mantiene la proporción correcta
                    height={700}
                    className={`drop-shadow-lg ${imageClasses[imageSize]}`}
                />
            </div>
        </section>
    );
};

// PropTypes para validación en JSX
ServiceFeature.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    imageSize: PropTypes.oneOf(["small", "medium", "large", "big"]),
};

export default ServiceFeature;
