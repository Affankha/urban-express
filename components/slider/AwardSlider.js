'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    // spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 20,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 20,
        },
    }
}

export default function AwardSlider1() {
    return (
        <>

        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-1.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-2.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-3.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-4.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-5.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-1.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-2.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-3.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-4.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                <img src="assets/images/brand/brand-1-5.png" alt=""/>
            </div>{/* /.swiper-slide */}
            </SwiperSlide>
        </Swiper>
        </>
    )
}
