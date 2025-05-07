"use client";

import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";

export default function ClientServiceQualityPolicy() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Quality Policy">
        <section style={{ paddingTop: "8%", paddingBottom: "8%", paddingLeft: "50px", paddingRight: "50px", minHeight: "100vh", paddingBottom: "100px" }}>
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Service Quality Policy</h2>
          </div><br />

          <div>
                      <Image src="/assets/images/schoolbusoffers/service_quality.jpg" alt="contigency plan img" width={800} height={400} style={{maxWidth: "100%", height: "auto", width: "100%"}}/>
                    </div><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Commitment to High Standards</h5>
          <p style={{paddingLeft: "25px"}}>
            Reflects our commitment to maintaining high standards of quality management and operational excellence.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Key Principles</h5>
          <ul style={{ color: "black" }}>
            <li>Intention to provide quality products and services.</li>
            <li>Commitment to continuous improvement in HSEQ management.</li>
            <li>Employee responsibility in maintaining product and service quality.</li>
            <li>Emphasis on compliance with legal, regulatory, and other requirements.</li>
          </ul><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Alignment with Industry Standards</h5>
          <p style={{paddingLeft: "25px"}}>
            Demonstrates a commitment to aligning with industry standards and best practices.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Continuous Improvement</h5>
          <p style={{paddingLeft: "25px"}}>
            Highlights dedication to continuous improvement through monitoring, auditing, analysis, and review. Underscores a proactive approach to quality management.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Open and Transparent Reporting</h5>
          <p style={{paddingLeft: "25px"}}>
            Commitment to open and transparent reporting on quality performance. Periodic review and revision of management systems and policies.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Ensuring Consistent Standards</h5>
          <p style={{paddingLeft: "25px"}}>
            Aims to ensure that operations consistently meet the highest standards of quality, safety, and environmental management.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Guiding Framework</h5>
          <p style={{paddingLeft: "25px"}}>
            The quality policy serves as a guiding framework for maintaining quality standards. Drives continuous improvement across operations.
          </p><br />

          <h5 style={{ color: "black" }}><GoSquareFill style={{ color: "#00aab5" }} />Commitment to Excellence</h5>
          <p style={{paddingLeft: "25px"}}>
            Emphasizes the organization's commitment to excellence in service delivery. Provides a strategic foundation for achieving operational and service excellence.
          </p><br />
        </section>
      </Layout>
    </>
  );
}
