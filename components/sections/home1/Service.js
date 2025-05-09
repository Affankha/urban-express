"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Service() {
  return (
    <>
      {/*Services One Start*/}
      <section className="services-one">
        {/* <div className="services-one__bg-shape float-bob-x">
                <img src="assets/images/shapes/services-one-bg-shape.png" alt=""/>
            </div> */}
        {/* <div className="services-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/services-one-bg.jpg)' }} >
            </div> */}
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">OUR SERVICES</span>
            </div>
            <h2 className="section-title__title">
              Your One-Stop Solution for Seamless Transportation Services
            </h2>
          </div>
          <div className="row">
            {/*services One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-one__single ">
                
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img src="assets/images/services/services-1.jpg" alt="" />
                    </div>
                  </div>
                
                <div className="services-one__content  ">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="our-services">
                        Bus operations and fleet management
                      </Link>
                    </h3>

                    <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
                      {[
                        "Urban Express delivers seamless transportation operations and expert Fleet Management services.",
                        "From meticulous route planning to diligent vehicle maintenance, our seasoned team ensures optimal performance and reliability.",
                        "Local Tours - daily excursions, Dinner Transfer",
                        "Airport transfer services - Arrival/Departure",
                      ].map((text, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <span style={{ marginRight: "8px" }}>•</span>
                          <p
                            className="services-one__text"
                            style={{ margin: 0 }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <span>•</span><p  className="services-one__text"> Urban Express delivers seamless transportation operations and expert Fleet Management services.</p>
                                    <span>•</span><p className="services-one__text"> From meticulous route planning to diligent vehicle maintenance, our seasoned team  ensures optimal performance and reliability.</p>
                                    <span>•</span> <p className="services-one__text">  Local Tours - daily excursions, Dinner Transfer</p>
                                    <span>•</span> <p className="services-one__text">  Airport transfer services - Arrival/Departure</p> */}
                  </div>
                  {/* <div className="services-one__read-more">
                                    <Link href="shipping-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div> */}
                </div>
              </div>
            </div>
            {/*services One Single End*/}
            {/*services One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-2.jpg" alt="" />
                  </div>
                  {/* <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-plane"></span>
                                    </div>
                                </div> */}
                </div>
                <div className="services-one__content">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="our-services">
                        Transportation service for corporate staff
                      </Link>
                    </h3>
                    <div
                      style={{
                        textAlign: "justify",
                        paddingLeft: "5px",
                        paddingBottom: "14.5%",
                      }}
                    >
                      {[
                        "We offer customizable transport solutions for corporate staff, providing a convenient and cost-effective alternative.",
                        "Daily commutes - our well-maintained fleet caters to businesses of all sizes.",
                        "Local Transportation Services - Sharjah / Dubai / Sharjah",
                      ].map((text, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <span style={{ marginRight: "8px" }}>•</span>
                          <p
                            className="services-one__text"
                            style={{ margin: 0 }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <span>•</span><p className="services-one__text"> We offer customizable transport solutions for corporate staff, providing a convenient and cost-effective alternative. </p>
                                    <span>•</span> <p className="services-one__text"> Daily  ommutes our well maintained fleet caters to businesses of all sizes. </p>
                                    <span>•</span> <p className="services-one__text"> Local Transportation Services - Sharjah / Dubai / Sharjah
                                    </p> */}
                  </div>
                  {/* <div className="services-one__read-more">
                                    <Link href="air-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div> */}
                </div>
              </div>
            </div>
            {/*services One Single End*/}
            {/*services One Single Start*/}

            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-3.jpg" alt="" />
                  </div>
                  {/* <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-truck"></span>
                                    </div>
                                </div> */}
                </div>
                <div className="services-one__content">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="our-services">Chartered route services</Link>
                    </h3>
                    <div style={{ textAlign: "justify", paddingLeft: "5px" }}>
                      {[
                        "Our chartered route services offer flexibility and convenience for individual commuters and organizations hosting events or special requirements.",
                        "By tailoring routes and schedules we meet specific customer expectations, ensuring a comfortable and hassle-free experience for our clients.",
                        "Visa Changeover Transportation - Dubai / Hatta / Dubai",
                      ].map((text, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <span style={{ marginRight: "8px" }}>•</span>
                          <p
                            className="services-one__text"
                            style={{ margin: 0 }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <span>•</span> <p className="services-one__text"> Our chartered route services offer flexibility and convenience for individual commuters and organizations hosting events or special requirements.</p>
                                    <span>•</span><p className="services-one__text"> By tailoring routes and schedules we meet specific customer expectations, ensuring a comfortable and hassle-free experience for our clients.</p>
                                    <span>•</span> <p className="services-one__text">  Visa Changeover Transportation - Dubai / Hatta / Dubai</p> */}
                  </div>
                  {/* <div className="services-one__read-more">
                                    <Link href="land-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div> */}
                </div>
              </div>
            </div>
            {/*services One Single End*/}
            {/*services One Single Start*/}
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight flex"
              data-wow-delay="900ms"
            >
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="assets/images/services/services-4.jpg" alt="" />
                  </div>
                  {/* <div className="services-one__icon-box">
                                    <div className="services-one__icon">
                                        <span className="icon-train"></span>
                                    </div>
                                </div> */}
                </div>
                <div className="services-one__content">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="our-services">School bus services</Link>
                    </h3>
                    <div
                      style={{
                        textAlign: "justify",
                        paddingLeft: "5px",
                        paddingBottom: "5%",
                      }}
                    >
                      {[
                        "Safety and reliability are paramount in our School Bus Services. Urban Express prioritizes student well-being by offering secure and punctual transportation to and from schools.",
                        "Our trained drivers and modern buses provide peace of mind to parents and educators.",
                        "Total solution for Student Bus Transportation services.",
                      ].map((text, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <span style={{ marginRight: "8px" }}>•</span>
                          <p
                            className="services-one__text"
                            style={{ margin: 0 }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* <span>•</span> <p className="services-one__text"> Safety and reliability are paramount in our School Bus Services. Urban Express prioritizes student well-being by offering secure and punctual transportation to and from schools.</p>
                                    <span>•</span><p className="services-one__text"> Our trained drivers and modern buses provide peace of mind to parents and educators.</p>
                                    <span>•</span> <p className="services-one__text"> Total solution for Student Bus Transportation services.</p> */}
                  </div>
                  {/* <div className="services-one__read-more">
                                    <Link href="railway-freight">read More<span className="icon-right-arrow"></span></Link>
                                </div> */}
                </div>
              </div>
            </div>

            {/*services One Single End*/}
            <div
              className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="services-one__single">
                
                  <div className="services-one__img-box">
                    <div className="services-one__img">
                      <img
                        src="assets/images/services/limo_service.avif"
                        alt="limo service"
                        style={{ filter: "grayscale(100%" }}
                      />
                    </div>
                  </div>
                
                <div className="services-one__content">
                  <div className="services-one__title-box">
                    <h3 className="services-one__title">
                      <Link href="our-services">LIMO services</Link>
                    </h3>
                    <div
                      style={{
                        textAlign: "justify",
                        paddingLeft: "5px",
                        paddingBottom: "5%",
                      }}
                    >
                      {[
                        "Our chartered route services offer flexibility and convenience for individual  and organizations hosting events or special requirements.",
                        "Local tours – daily excursions, Dinner Transfer.",
                        "Airport Transfer services – Arrival/Departure.",
                      ].map((text, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "12px",
                          }}
                        >
                          <span style={{ marginRight: "8px" }}>•</span>
                          <p
                            className="services-one__text"
                            style={{ margin: 0 }}
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        textAlign: "justify",
                        paddingLeft: "5px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="services-one__bottom-text">Please <Link href="services">click here</Link> to see all services
                </p> */}
          </div>
        </div>
      </section>
      {/*Services One End*/}
    </>
  );
}
