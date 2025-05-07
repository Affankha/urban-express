import Layout from "../../components/layout/Layout";

export default function TransportationService() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Transportation Service">
        {/* Services Page Start */}
        <section
          className="team-page"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", height:"700px" }}>
            <div>
              {/* Title */}
              <div style={{ textAlign: "center", marginBottom: "50px" }}>
                <h2 style={{ color: "black", fontSize: "2.5rem" }}>
                  Transportation Service For Corporate Staff
                </h2>
              </div>

              {/* Flexbox Start */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                {/* Image Section */}
                <div style={{ flex: "1 1 500px", textAlign: "center" }}>
                  <img
                    src="assets/images/services/services-2.jpg"
                    alt="Corporate Transport"
                    style={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>

                {/* Text Section */}
                <div style={{ flex: "1 1 500px" }}>
                  <p
                    className="profile-bio"
                    style={{
                      margin: 0,
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#555",
                    }}
                  >
                    • We offer customizable transport solutions for corporate staff, providing a convenient and cost-effective alternative.<br /><br />
                    • Our well-maintained fleet caters to businesses of all sizes for daily commutes.<br /><br />
                    • Local Transportation Services - Sharjah / Dubai / Sharjah.
                  </p>
                </div>
              </div>
              {/* Flexbox End */}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

















// import Layout from "@/components/layout/Layout";
// import { Container } from "lucide-react";
// // import Link from "next/link";
// export default function TransportationService() {
//   return (
//     <>
//       <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Transportation Service">
//         {/*Services Page Start*/}

//         <section className="team-page" style={{ bottom: 100, top: 100 , height:1100}}>
//   <div className="container">
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
//             Transportation Service For Corporate Staff
//             </h2>
//           </div>
//           <div>

//             <img 
//               src="assets/images/services/services-2.jpg" 
//               alt="Profile" 
//               className="profile-image" 
//               style={{ width:1000,alignItems:"center", height: "500px", objectFit: "contain", borderRadius: "10px" }}
//             />
//           </div>

//           {/* Right Side - Information */}
//           <div style={{ flex: 1 }}>
//             <p className="profile-bio" style={{ margin: 0, fontSize: "16px", lineHeight: "1.5", fontSize:20,lineHeight: 1.6}}>
//             We offer customizable transport solutions for
//             corporate sta, providing a convenient and
//             cost-eective alternative.
//             Daily commutes our well-maintained fleet
//             caters to businesses of all sizes.
//             Local Transportation Services - Sharjah /
//             Dubai / Sharjah.

//             </p>
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
