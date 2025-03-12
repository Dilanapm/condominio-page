"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <div className="relative w-full flex flex-col justify-center items-center  gap-6">
            {/* Flecha izquierda */}
            <button className="swiper-services-prev absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 z-50 bg-secondary p-2 rounded-full shadow-lg hover:bg-secondary/80 transition">
                <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
            </button>

            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 15 }
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                navigation={{ nextEl: ".swiper-services-next", prevEl: ".swiper-services-prev", clickable: true }}
                modules={[Pagination, Navigation]}
                className="h-[220px] sm:h-[250px] md:h-[150px] w-[270px] md:w-[550px] relative"
            >
                {serviceData.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center h-full">
                        <div className="flex flex-col px-6 py-4 h-full rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                            <div className="text-4xl text-secondary">{item.icon}</div>
                            <div>
                                <h3 className="text-lg">{item.title}</h3>
                                {/* <p className="text-sm">{item.description}</p> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Flecha derecha */}
            <button className="swiper-services-next absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 z-50 bg-secondary p-2 rounded-full shadow-lg hover:bg-secondary/80 transition">
                <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Paginación con separación */}
            <div className="swiper-pagination mt-8"></div>
        </div>
    );
}

export default SliderServices;
