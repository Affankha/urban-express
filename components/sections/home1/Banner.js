'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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
}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            
        {/* Main Sllider Start */}
        <section className="main-slider">
            <Swiper {...swiperOptions} className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel">
                <SwiperSlide>
                <div className="item main-slider__slide-1">
                    <div className="main-slider__bg"
                        style={{ backgroundImage: 'url(assets/images/backgrounds/bg-img.jpg)' }} >
                    </div>{/* /.slider-one__bg */}
                    {/* <div className="main-slider__shape-1">
                        <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider__shape-2">
                        <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider__shape-3">
                        <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                    </div> */}
                    <div className="container">
                        <div className="main-slider__content">
                            <p className="main-slider__sub-title"></p>
                            <h2 className="main-slider__title">Urban Express
                            </h2>
                            <p style={ { fontSize: "25px", color:"white"}}>Redefining Transportation Excellence</p>
                            {/* <div className="main-slider__btn-and-video-box">
                                <div className="main-slider__btn-box">
                                    <Link href="about" className="main-slider__btn thm-btn">Discover More</Link>
                                </div>
                                <div className="main-slider__video-link">
                                    <a  onClick={() => setOpen(true)} className="video-popup">
                                        <div className="main-slider__video-icon">
                                            <span className="icon-play-button"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                    <h4 className="main-slider__video-text">Showreel</h4>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            
              
            </Swiper>
        </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        {/*Main Sllider Start */}
        </>
    )
}
