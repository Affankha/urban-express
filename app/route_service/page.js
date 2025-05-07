import Layout from "../../components/layout/Layout";

export default function RouteServices() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Chartered Route Services">
        {/* Services Page Start */}
        <section
          className="team-page"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto",  height: "700px"}}>
            <div>
              {/* Title */}
              <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2 style={{ color: "black", fontSize: "2.5rem" }}>Chartered Route Services</h2>
              </div>

              {/* Flex Box - Image and Content */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Left - Image */}
                <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                  <img
                    src="assets/images/services/services-3.jpg"
                    alt="Profile"
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

                {/* Right - Text Content */}
                <div style={{ flex: "1 1 500px" }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#555",
                    }}
                  >
                    • Our chartered route services offer flexibility and convenience for individual commuters and organizations hosting events or special requirements.
                    <br />
                    • By tailoring routes and schedules, we meet specific customer expectations, ensuring a comfortable and hassle-free experience for our clients.
                    <br />
                    • Visa Changeover Transportation - Dubai / Hatta / Dubai.
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
























// import Layout from "@/components/layout/Layout";
// import { Columns, Columns2, Container } from "lucide-react";
// // import Link from "next/link";
// export default function RouteServices() {
//   return (
//     <>
//       <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Route Services">
//         {/*Services Page Start*/}

//         <section className="team-page" style={{ bottom: 100, top: 100 , height:1200}}>
//   <div className="container ">
//     <div>
//       {/* Team Two Single Start */}
//       <div data-wow-delay="100ms">
//         <div className="" style={{ 
           
//           // alignItems: "center", 
//           // gap: "20px", 
//           padding: "20px", 
//           // border: "1px solid #ccc", 
//           // borderRadius: "10px",
//           // backgroundColor: "#f9f9f9"
//         }}>
          
//           {/* Left Side - Image */}
//           <div>
//             <h2 style={{color:"black", textAlign:"center", margin:30}}>
//             Chartered Route Services
//             </h2>
//           </div>
//           <div className="row">
//           <div>

//             <img 
//               src="assets/images/services/services-3.jpg" 
//               alt="Profile" 
//               className="profile-image" 
//               style={{ width:1000,alignItems:"center", height: "500px", objectFit: "contain", borderRadius: "10px" }}
//             />
//           </div>

//           {/* Right Side - Information */}
//           <div style={{ flex: 1 }}>
//             <p className="profile-bio" style={{ margin: 0, fontSize: "16px", lineHeight: "1.5", fontSize:20,lineHeight: 2.6, }}>
//             • Our chartered route services offer flexibility and convenience for individual commuters and organizations hosting events or special requirements.<br/>
//             • By tailoring routes and schedules we meet specific customer expectations, ensuring a comfortable and hassle-free experience for our clients..<br/>
//             • Visa Changeover Transportation - Dubai / Hatta / Dubai.<br/>
//             </p>
//           </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
// </section>
      
//       </Layout>
//     </>
//   );
// }
