import Link from "next/link";
import Image from "next/image";
export default function Footer1() {
  return (
    <>
      {/*Site Footer Start*/}
      <footer className="site-footer">
        <div className="site-footer__shape-1 float-bob-x">
          <img src="/assets/images/shapes/footer-shape-1.png" alt="shape1" />
        </div>
        {/* <div className="site-footer__shape-2 float-bob-y">
                <img src="assets/images/shapes/footer-shape-2.png" alt=""/>
            </div> */}
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row">
                {/* Column 1: About */}
                <div
                  style={{ marginRight: "10%" }}
                  className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__logo bg-white p-4 rounded-3">
                      <Link href="/">
                        <Image
                          src="/assets/images/resources/logo-1.png"
                          alt="Logo"
                          width={70} height={30}
                        />
                      </Link>
                    </div>
                    <p className="footer-widget__about-text">
                      Urban Express is a premier provider of comprehensive
                      transportation solutions, specializing in Bus Operations
                      and Fleet Management. With a dedication to reliability,
                      safety, and efficiency, we offer a diverse range of
                      services tailored to meet the unique needs of our clients.
                    </p>
                  </div>
                </div>

                {/* Column 2: Navigation */}
                <div
                  style={{ paddingBottom: "5%" }}
                  className="col-xl-3 col-lg-4 col-md-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__navigation">
                    <div className="footer-widget__title-box">
                      <h3 className="footer-widget__title">Navigation</h3>
                    </div>
                    <ul className="footer-widget__navigation-list list-unstyled">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/vision-and-mission/">
                          Vision and Mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us/">About Us</Link>
                      </li>
                      <li>
                        <Link href="/sch_bus_off/">School Bus</Link>
                      </li>
                      <li>
                        <Link href="/cli_bus_off/">Client Bus</Link>
                      </li>
                      <li>
                        <Link href="/our-services">Our Services</Link>
                      </li>
                      <li>
                        <Link href="/our-team/">Our Team</Link>
                      </li>
                      <li>
                        <Link href="/contact/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Column 3: Address */}
                <div
                  className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp address"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__title-box">
                    <h3 className="footer-widget__title">Address</h3>
                  </div>
                  <p className="footer-widget__about-text">
                  Office PO Box Number is 35458
                  Address: Office no 105, First Floor, B Block, Bel Rasheed Twin Towers, Al Qusais, Dubai, UAE.
                  </p>
                  <div className="footer-widget__emergency-call">
                    <Link href="tel:+971 52 1124 424">+971 52 1124 424</Link>
                    <Link href="tel:+971 52 1134 434">+971 52 1134 434</Link>
                    <br />
                    <Link
                      href="mailto:needhelpbondor@gmail.cpm"
                      className="footer-widget__emergency-mail"
                    >
                     needhelpbondor@gmail.cpm
                    </Link>
                    <Link
                      href="mailto:info@urbanexpress.ae"
                      className="footer-widget__emergency-mail"
                    >
                      info@urbanexpress.ae
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                Copyright © 2024 Urban Express, All rights reserved.{" "}
                <Link href="#"></Link>
              </p>
              <div className="site-footer__social">
                <p className="site-footer__bottom-text">
                  Design & Developed by{" "}
                  <Link href="https://mokshasolutions.com/">
                    Moksha Solutions
                  </Link>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
    </>
  );
}
