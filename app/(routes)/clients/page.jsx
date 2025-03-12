"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import ClientBox from "@/components/clients-box";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CoverParticles } from "@/components/cover-particles";

const ClientsPage = () => {
    return (
        <ContainerPage>
            <CoverParticles/>
            <TransitionPage />
            <div className="flex flex-col justify-center items-center relative mt-20">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Nuestros <span className="font-bold text-secondary">Clientes</span>
                </h1>

                {/* Swiper Carrusel */}
                <div className="relative w-full max-w-[90%] md:max-w-[1000px] mx-auto overflow-visible">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-clients-next",
                            prevEl: ".swiper-clients-prev",
                            clickable: true,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 }, // Móviles
                            640: { slidesPerView: 1.5, spaceBetween: 20 }, // Tablets pequeñas
                            1024: { slidesPerView: 2.5, spaceBetween: 30 }, // Pantallas grandes
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1.8,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container h-[460px] md:h-[460px] overflow-visible relative mb-4"
                    >
                        {dataPortfolio.map((data) => (
                            <SwiperSlide 
                                key={data.id} 
                                className="w-[300px] md:w-[500px] flex justify-center items-center transition-all duration-500 ease-in-out overflow-visible z-10"
                                style={{ perspective: "1200px" }}
                            >
                                <ClientBox data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Controles de navegación - Se colocan fuera del Swiper */}
                    <div className="absolute top-1/2 left-0 w-full flex justify-between px-4 transform -translate-y-1/2 z-50">
                        <button className="swiper-clients-prev bg-indigo-700 text-white p-3 rounded-full shadow-md hover:bg-indigo-950 transition z-50">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="swiper-clients-next bg-indigo-700 text-white p-3 rounded-full shadow-md hover:bg-indigo-950 transition z-50">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Paginación centrada */}
                    <div className="swiper-pagination mt-4"></div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ClientsPage;
