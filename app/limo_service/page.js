import Layout from "../../components/layout/Layout";

export default function BusOperation() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="LIMO Service">
        {/* Services Page Start */}
        <section
          className="team-page"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", height: "700px"}}>
            <div>
              {/* Title */}
              <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2 style={{ color: "black", fontSize: "2.5rem" }}>
                LIMO services
                </h2>
              </div>

              {/* Flex Container - Image + Content */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                {/* Left Side - Image */}
                <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                  <img
                    src="assets/images/services/limo_service.avif"
                    alt="Bus Operations"
                    style={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "auto",
                      // borderRadius: "10px",
                      objectFit: "cover",
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>

                {/* Right Side - Content */}
                <div style={{ flex: "1 1 500px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#555",
                    }}
                  >
                    • Our chartered route services offer flexibility and convenience for individual commuters and organizations hosting events or special requirements.<br /><br />
                    • Local tours – daily excursions, Dinner Transfer.
                    <br /><br />
                    • Airport Transfer services – Arrival/Departure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}










