"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import { GoSquareFill } from "react-icons/go";

export default function ComplaintResolution() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Complaint Resolution & Escalation Matrix">
      <section style={{ paddingTop: "8%", paddingBottom: "8%", paddingLeft: "50px", paddingRight: "50px", minHeight: "100vh", paddingBottom: "100px" }}>

        <div style={{ color: "black" }}>
          <h2 style={{ color: "#00aab5" }}>Complaint Resolution & Escalation Matrix</h2><br />
        </div>
          <div>
            <Image src="/assets/images/schoolbusoffers/complain.jpg" alt="contigency plan img" width={800} height={400} style={{maxWidth: "100%",width: "100%"}}/>
          </div><br />


        <div style={{ color: "black" }}>
          <p style={{paddingLeft: "15px"}}>
            The implementation of an escalation matrix is crucial for addressing issues and challenges that may arise during the delivery of transportation services. The Escalation Matrix provides a structured framework for escalating and resolving issues in a timely and efficient manner, thereby contributing to the overall reliability and quality of the services.
          </p><br />

          <p style={{paddingLeft: "15px"}}>
            The escalation matrix and relevant processes are designed to define clear lines of responsibility and accountability, ensuring that issues are addressed at the appropriate levels within the organization. This structured approach helps in streamlining communication, decision-making, and problem-solving, ultimately leading to improved service delivery and customer satisfaction.
          </p><br />

          <p style={{paddingLeft: "15px"}}>
            Furthermore, our proposal emphasizes the importance of performance measurement and management, indicating a commitment to continuous improvement and quality assurance. We handle complaints and concerns through various channels, including telephone calls, emails, and in-person interactions.
          </p><br />

          <h4 style={{ color: "black" }}>We follow a robust escalation process:</h4><br />
          <ul style={{ paddingLeft: "20px" }}>
            <li>Operations are headed by the <strong>CEO</strong>, assisted by the <strong>COO</strong>, <strong>Operations Manager</strong>, <strong>Operations Executive</strong>, and the <strong>Quality Assurance</strong> and <strong>Training teams</strong>.</li><br />
            <li>Each school is assigned a <strong>dedicated Parent Relations Executive (PRE)</strong> who manages fee collection, school operations, and internal communication with the school on behalf of Urban Express.</li><br />
            <li>Every 10 buses are assigned a <strong>Team Leader</strong> who ensures best practice implementation. A <strong>Foreman</strong> manages the school’s bus fleet.</li><br />
            <li>Team Leaders report to the Foreman, and the Foreman reports to the Operations Manager.</li><br />
            <li>The <strong>Administrative Manager</strong> of the school or any designated school representative can communicate directly with the PRE/Foreman to relay requirements.</li><br />
            <li><strong>Transport staff</strong> take care of operational school requirements as needed.</li>
          </ul><br />

          
        </div>
      </section>
    </Layout>
  );
}
