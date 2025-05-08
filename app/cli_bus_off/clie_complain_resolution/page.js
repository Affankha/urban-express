"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import { GoSquareFill } from "react-icons/go";

export default function ComplaintResolution() {
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Complaint Resolution & Escalation Matrix"
    >
      <section
        style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", marginBottom:"5%" }}
      >
        <div style={{ color: "black" }}>
          <h2 style={{ color: "#00aab5" }}>
            Complaint Resolution & Escalation Matrix
          </h2>
          <br />
        </div>
        <div>
          <Image
            src="/assets/images/schoolbusoffers/complain.jpg"
            alt="contigency plan img"
            width={800}
            height={400}
            style={{ maxWidth: "100%", width: "100%",filter: "grayscale(100%)" }}
          />
        </div>
        <br />

        <div style={{ color: "black" }}>
          <p>
            The implementation of an escalation matrix is crucial for addressing
            issues and challenges that may arise during the delivery of
            transportation services. The Escalation Matrix provides a structured
            framework for escalating and resolving issues in a timely and
            eficient manner, thereby contributing to the overall reliability and
            quality of the services. The escalation matrix and relevant
            processes are designed to define clear lines of responsibility and
            accountability, ensuring that issues are addressed at the
            appropriate levels within the organization. This structured approach
            helps in streamlining communication, decision-making, and
            problem-solving, ultimately leading to improved service delivery and
            customer satisfaction. Furthermore, our proposal emphasizes the
            importance of perormance measurement and management, indicating a
            commitment to continuous improvement and quality assurance.
          </p>
        </div>
      </section>
    </Layout>
  );
}
