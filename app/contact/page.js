import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from "./contact-form";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact Page Start*/}
        <section className="contact-page">
          <div
            className="contact-page__top-img"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.319038194057!2d55.392136975166885!3d25.29348297764908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d901ed35e81%3A0xf50a17df7753c00b!2sBelrasheed%20Twin%20Towers!5e0!3m2!1sen!2sin!4v1744116160357!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="container">
            <div className="contact-page__middle">
              <div className="row container">
                <div className="col-xl-6 col-lg-6">
                  <div
                    style={{ paddingTop: "12%" }}
                    className="contact-page__middle-left"
                  >
                    <h3 className="contact-page__middle-title">Get In Touch</h3>
                    <p className="contact-page__middle-text">
                      Urban Express Charter: Your Trusted Transportation Partner
                    </p>
                    <div className="contact-page__contact-info">
                      <h3 className="contact-page__contact-info-title">
                        Contact Info
                      </h3>
                      <ul className="contact-page__contact-list list-unstyled">
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              fontSize: "20px",
                            }}
                          >
                            <CiLocationOn />
                          </span>
                          <div>
                            <h4 className="contact-page__contact-list-title">
                              Address
                            </h4>
                            <p>
                              Office PO Box Number is 35458 Address: Office no
                              105, First Floor, B Block, Bel Rasheed Twin
                              Towers, Al Qusais, Dubai, UAE.
                            </p>
                          </div>
                        </li>
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              fontSize: "18px",
                            }}
                          >
                            <IoCallOutline />
                          </span>
                          <div>
                            <h4 className="contact-page__contact-list-title">
                              Phone
                            </h4>
                            <p>
                              <Link href="tel:+971 52 1124 424">
                                +971 52 1124 424
                              </Link>
                              <br />
                              <Link href="tel:+971 52 1134 434">
                                +971 52 1134 434
                              </Link>
                            </p>
                          </div>
                        </li>{" "}
                        <li
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              fontSize: "18px",
                            }}
                          >
                            <i className="icon-email"></i>
                          </span>
                          <div>
                            <h4 className="contact-page__contact-list-title">
                              Email
                            </h4>
                            <p>
                              <Link href="mailto:needhelpbondor@gmail.cpm">
                                needhelpbondor@gmail.cpm
                              </Link>
                              <br></br>
                              <Link href="mailto:info@urbanexpress.ae">
                                info@urbanexpress.ae
                              </Link>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="contact-page__middle-right">
                    <div className="contact-page__bottom flex">
                      <div className="contact-page__form-box">
                        <h3 className="comment-one__title">
                          Let’s Get In Touch
                        </h3>
                        <p className="comment-one__text">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <ContactForm />

                        <div className="result"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}
      </Layout>
    </>
  );
}
