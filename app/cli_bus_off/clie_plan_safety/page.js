"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import styles from "./clie_plan_safety.module.css"; // External CSS for responsiveness

export default function ClientScope() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Plan & Safety">
        <section className={styles.section}  style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", }}>
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
              src="/assets/images/clientbusoffers/plan_safety1.jpg"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
              style={{filter: "grayscale(100%)"}}
            />
            <Image
              src="/assets/images/clientbusoffers/plan_safety2.jpg"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
              style={{filter: "grayscale(100%)"}}
            />
          </div >
        </section>
      </Layout>
    </>
  );
}




