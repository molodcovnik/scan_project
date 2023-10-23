import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import '../styles/Slider.css';

const Slider = () => {
    const slides = [
        {
            id: 1,
            src: 'timer.svg',
            altText: 'Высокая и оперативная скорость обработки заявки',
        },
        {
            id: 2,
            src: 'loop.svg',
            altText: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
        },
        {
            id: 3,
            src: 'depend.svg',
            altText: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
        },
        {
            id: 4,
            src: 'loop.svg',
            altText: 'Высокая и оперативная скорость обработки заявки',
        },
        {
            id: 5,
            src: 'timer.svg',
            altText: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
        }
        
    ]



    return (

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={window.innerWidth > 1024 ? 3 : 1}
                navigation
                pagination={{ clickable: true }}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>

                    {slides.map(slide => (

                        <SwiperSlide key={slide.id}>
                            <div className="slide">
                                <div className="slider-image">
                                    <img src={slide.src} alt={slide.src} />
                                </div>
                                <div className="slider-text">
                                    <p>{slide.altText}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
    );
};

export default Slider;