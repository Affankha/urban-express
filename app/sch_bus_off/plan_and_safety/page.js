"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import styles from "./plan_and_safety.module.css"; // External CSS for responsiveness

export default function SchoolScope() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan & Safety">
        <section className={styles.section} style={{minHeight: "100vh"}}>
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>
              Operation plan and safety standards
            </h2>
          </div>
          <br />

          <p>
            The Operational Plan outlines the standards and requirements,
            including driver qualifications, fleet capacity, routine and
            periodic maintenance protocol.
            <br />
            <br />
            Quality management processes are integral to the operational plan,
            emphasizing the importance of adherence to vehicle standards, driver
            qualifications, and behavior standards. The plan includes measures
            for real-time monitoring and reporting, enabling proactive
            management of service quality and performance.
            <br />
            <br />
            Additionally, the plan outlines the establishment of an escalation
            matrix and relevant processes to ensure effective performance
            measurement and management, further demonstrating the commitment to
            maintaining high service standards and operational excellence in
            transportation services.
            <br />
            <br />
            Our proposed plan also highlights the significance of adherence to
            time schedules.
          </p>

          <div className={styles.imageContainer} style={{paddingBottom: "100px"}}>
            <Image
              src="/assets/images/schoolbusoffers/plan_safety-1.jpg"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
            />
            <Image
              src="/assets/images/schoolbusoffers/plan_safety-2.jpg"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
            />
          </div >
        </section>
      </Layout>
    </>
  );
}





// "use client";

// // import { useState } from "react";
// import Layout from "../../../components/layout/Layout";
// import Image from "next/image";
// export default function SchoolScope() {
//   // const [isOpen, setOpen] = useState(false);

//   return (
//     <>
//       <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan & Safety">
//         <section style={{ paddingTop: "8%", paddingBottom: "8%", paddingLeft: "50px", paddingRight: "50px" }}>
        
//           <div style={{color: "black"}}> 
//             <h2 style={{color: "#00aab5"}}>Operation plan and safety standerds</h2></div><br />


// <p >
// The Operational Plan outlines the standards and requirements, including driver qualifications, fleet
// capacity, routine and periodic maintenance protocol.<br /><br />

// Quality management processes are integral to the operational plan, emphasizing the importance of
// adherence to vehicle standards, driver qualifications, and behavior standards. The plan includes measures for real-time monitoring and reporting, enabling proactive management of service quality and
// performance. <br /><br />

// Additionally, the plan outlines the establishment of an escalation matrix and relevant processes to
// ensure effective performance measurement and management, further demonstrating the commitment
// to maintaining high service standards and operational excellence in transportation services. Our
// proposed plan also highlights the significance of adherence to time schedules. <br /><br />

// Additionally, the plan outlines the establishment of an escalation matrix and relevant processes to
// ensure effective performance measurement and management, further demonstrating the commitment
// to maintaining high service standards and operational excellence in transportation services. Our
// proposed plan also highlights the significance of adherence to time schedules. <br /><br />


// </p>
// <div style={{display: "flex", gap: "16px", justifyContent: "center" }}>
// <Image
//   src="/assets/images/schoolbusoffers/plan_safety-1.jpg"
//   alt="school bus"
//   width={600}
//   height={300}
// /><br /><br />
// <Image
//   src="/assets/images/schoolbusoffers/plan_safety-2.jpg"
//   alt="school bus"
//   width={600}
//   height={300}
// />
  
// </div>



//         </section>
//       </Layout>
//     </>
//   );
// }




