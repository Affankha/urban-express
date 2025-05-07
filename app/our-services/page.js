import Link from "next/link";
import Layout from "../../components/layout/Layout";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our service">
        {/*Services Page Start*/}

        <section className="services-one">
          <div className="container">
            <div className="section-title text-center">
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
                <div className="services-one__single  ">
                  <Link href="./bus_operation">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src="assets/images/services/services-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="services-one__content">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href="./bus_operation">
                          Bus Operations And Fleet Management
                        </Link>
                      </h3>
                      <Link href="bus_operation">
                        <div
                          style={{ textAlign: "justify", paddingLeft: "5px" }}
                        ></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/*services One Single Start*/}
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="services-one__single">
                  <Link href="./transportaion_service">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src="assets/images/services/services-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="services-one__content">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href="./transportaion_service">
                          Transportation Service For Corporate Staff
                        </Link>
                      </h3>
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

              {/*services One Single Start*/}

              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="services-one__single">
                  <Link href="./route_service">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src="assets/images/services/services-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="services-one__content">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href="./route_service">
                          Chartered Route Services
                        </Link>
                      </h3>
                      <div
                        style={{ textAlign: "justify", paddingLeft: "5px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*services One Single End*/}

              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight flex"
                data-wow-delay="900ms"
              >
                <div className="services-one__single">
                  <Link href="./school_bus">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src="assets/images/services/services-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="services-one__content">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link
                          href="./school_bus"
                          style={{ textAlign: "center" }}
                        >
                          School Bus Services
                        </Link>
                      </h3>
                      <Link href="./school_bus"></Link>
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

              {/*services One Single End*/}

              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single  ">
                  <Link href="./limo_service">
                    <div className="services-one__img-box">
                      <div className="services-one__img">
                        <img
                          src="assets/images/services/limo_service.avif"
                          alt="limo service"
                          style={{filter: "grayscale(100%)",}}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="services-one__content">
                    <div className="services-one__title-box">
                      <h3 className="services-one__title">
                        <Link href="./limo_service">
                          LIMO services
                        </Link>
                      </h3>
                      <Link href="limo_service">
                        <div
                          style={{ textAlign: "justify", paddingLeft: "5px" }}
                        ></div>
                      </Link>
                    </div>
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
