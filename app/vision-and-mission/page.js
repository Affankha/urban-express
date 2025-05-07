import Layout from "../../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Vision and Mission"
      >
        {/*Blog One Start */}
        <section className="blog-one">
          <div className="container">
            <div className="row">
              <section
                style={{ backgroundColor: "white" }}
                className="destination-one"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="destination-one__left">
                        {/* <div className="destination-one__shape-1"></div>
                            <div className="icon">
                                <span className="icon-reputation"></span>
                            </div> */}
                        <div className="destination-one__left-content">
                          <div className="destination-one__count count-box">
                            <h3>Vision</h3>
                          </div>
                          <p className="destination-one__left-text">
                            To be the leading innovator in urban transportation,
                            enhancing connectivity and quality of life for our
                            communities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="destination-one__right">
                        {/* <div className="icon">
                    <span className="icon-location"></span>
                  </div> */}
                        <div className="content">
                          <h3>Mission</h3>
                          <p>
                            At Urban Express, our mission is to provide safe,
                            reliable, and environmentally responsible
                            transportation services tailored to the diverse
                            needs of our clients. We are committed to exceed
                            expectations through continuous innovation,
                            operational excellence, and a steadfast commitment
                            to customer satisfaction. By fostering partnerships
                            and embracing emerging technologies, we strive to
                            create seamless mobility experiences that enrich
                            lives and empower communities.
                          </p>
                          {/* <Link href="contact">CONTACT US</Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </section>
            </div>
          </div>
        </section>
        {/*Blog One End */}
        <section className="blog3">
          {/*Blog One Single Start*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "0px",
            }}
            className="row wow fadeInLeft"
            data-wow-delay="100ms"
          >
            {/* Text Section */}
            <div
              className="col-xl-8 col-lg-8 col-md-8 blog-one__single"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4 style={{ color: "black", paddingBottom: "2%" }}>
                Empowering Mobility :
              </h4>
              <h3 style={{ fontSize: "25px", fontWeight: "700" }}>
                Unveiling urban{" "}
                <span style={{ fontWeight: "300" }}>express <hr></hr></span>
              </h3>
              <br />
              <div className="blog-one__content">
                <h3
                  style={{
                    textAlign: "end",
                    paddingRight: "5%",
                    color: "#00aab5",
                  }}
                  className=""
                >
                  <Link href="">our story</Link>
                </h3>
                <div className="blog-one__meta-and-arrow">
                  <p
                    style={{
                      textAlign: "justify",
                      paddingRight: "5%",
                      marginTop: "-5.5%",
                      paddingTop: "1%",
                    }}
                  >
                    Urban Express has emerged as a distinguished leader in the
                    transportation industry, tracing its roots back to a humble
                    beginning fueled by a passion for delivering exceptional
                    service. Over the years, we have cultivated a rich legacy of
                    excellence, earning the trust and loyalty of our clients
                    through our unwavering commitment to quality and innovation.
                    From our modest origins to our current position as a premier
                    provider of comprehensive transportation solutions, our
                    journey has been characterized by a relentless pursuit of
                    excellence and a steadfast dedication to customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
           
               <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0%",
                paddingRight: "0%",
                marginTop:"10%",
              }}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="assets/images/news/blog1.jpg"
                      alt="Our Commitment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/*Blog One Single Start*/}
           <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "0px",
            }}
            className="row wow fadeInLeft"
            data-wow-delay="100ms"
          >
            {/* Content Section */}
            <div className="col-xl-8 col-lg-8 col-md-8 blog-one__single">
              <div className="blog-one__content">
                <h3
                  style={{
                    textAlign: "end",
                    color: "#00aab5",
                    paddingRight: "5%",
                  }}
                  className=""
                >
                  <Link href="">our expertise</Link>
                </h3>
                <div className="blog-one__meta-and-arrow">
                  <p
                    style={{
                      textAlign: "justify",
                      paddingRight: "5%",
                      marginTop: "-5.5%",
                      paddingTop: "1%",
                    }}
                  >
                   At Urban Express, we specialize in navigating the
complexities of urban transportation with precision
and efficiency. Our core expertise lies in Bus Operations
and Fleet Management, where we leverage cuttingedge
technologies and best practices to optimize
performance and streamline operations. With a
team of seasoned professionals at the helm, we
are equipped to handle the most demanding
transportation challenges, ensuring that every journey
is executed flawlessly and with the utmost precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0%",
                paddingRight: "0%",
              }}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="assets/images/news/blog2.jpg"
                      alt="Our Commitment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Blog One Single Start*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: "0px",
            }}
            className="row wow fadeInLeft"
            data-wow-delay="100ms"
          >
            {/* Content Section */}
            <div className="col-xl-8 col-lg-8 col-md-8 blog-one__single">
              <div className="blog-one__content">
                <h3
                  style={{
                    textAlign: "end",
                    color: "#00aab5",
                    paddingRight: "5%",
                  }}
                  className=""
                >
                  <Link href="">our commitment</Link>
                </h3>
                <div className="blog-one__meta-and-arrow">
                  <p
                    style={{
                      textAlign: "justify",
                      paddingRight: "5%",
                      marginTop: "-5.5%",
                      paddingTop: "1%",
                    }}
                  >
                    Reliability, safety, and efficiency are the cornerstones of
                    our operations at Urban Express. We are committed to
                    upholding the highest standards of safety and quality in
                    everything we do, prioritizing the wellbeing of our
                    passengers and the communities we serve. From stringent
                    safety protocols to rigorous maintenance standards, we leave
                    no stone unturned in our quest to deliver transportation
                    solutions that exceed expectations. Our unwavering
                    commitment to excellence drives us to continuously innovate
                    and improve, setting new benchmarks for quality and
                    reliability in the transportation industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0%",
                paddingRight: "0%",
              }}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img
                      src="assets/images/news/blog3.jpg"
                      alt="Our Commitment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
