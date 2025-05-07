'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h2n',
        prevEl: '.h2p',
    },
    

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
}

export default function AwardSlider5() {
    return (
        <>

            <Swiper {...swiperOptions} className="team-one__carousel owl-carousel owl-theme thm-owl__carousel">
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Annete Black</Link></h3>
                            <p className="team-one__sub-title">Engineer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Anannya Wifey</Link></h3>
                            <p className="team-one__sub-title">Developer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Shamim Khan</Link></h3>
                            <p className="team-one__sub-title">Co Founder</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-4.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Ananta Khan</Link></h3>
                            <p className="team-one__sub-title">Designer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Annete Black</Link></h3>
                            <p className="team-one__sub-title">Engineer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Anannya Wifey</Link></h3>
                            <p className="team-one__sub-title">Developer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Shamim Khan</Link></h3>
                            <p className="team-one__sub-title">Co Founder</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-4.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Ananta Khan</Link></h3>
                            <p className="team-one__sub-title">Designer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Annete Black</Link></h3>
                            <p className="team-one__sub-title">Engineer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Anannya Wifey</Link></h3>
                            <p className="team-one__sub-title">Developer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Shamim Khan</Link></h3>
                            <p className="team-one__sub-title">Co Founder</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-4.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Ananta Khan</Link></h3>
                            <p className="team-one__sub-title">Designer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-1.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Annete Black</Link></h3>
                            <p className="team-one__sub-title">Engineer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-2.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Anannya Wifey</Link></h3>
                            <p className="team-one__sub-title">Developer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-3.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Shamim Khan</Link></h3>
                            <p className="team-one__sub-title">Co Founder</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
                {/*Team One Single Start*/}
                <SwiperSlide>
                <div className="item">
                    <div className="team-one__single">
                        <div className="team-one__img-box">
                            <div className="team-one__img">
                                <img src="assets/images/team/team-1-4.jpg" alt=""/>
                            </div>
                            <div className="team-one__share-and-social">
                                <div className="team-one__share">
                                    <Link href="team-details"><span className="fas fa-share-alt"></span></Link>
                                </div>
                                <div className="team-one__social">
                                    <Link href="team-details"><span
                                            className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="team-details"><span className="icon-twitter"></span></Link>
                                    <Link href="team-details"><span className="icon-instagram"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="team-one__content">
                            <h3 className="team-one__name"><Link href="team-details">Ananta Khan</Link></h3>
                            <p className="team-one__sub-title">Designer</p>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/*Team One Single End*/}
            </Swiper>
        </>
    )
}
