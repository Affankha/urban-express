"use client";

import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";

export default function ContingencyPlans() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contingency Plans">
        <section style={{ paddingTop: "8%", paddingBottom: "8%", paddingLeft: "50px", paddingRight: "50px", minHeight: "100vh" }}>
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Contingency Plans</h2>
          </div>

          <p style={{ color: "black" }}>In the event of emergencies, the company has established protocols for immediate response and coordination with relevant authorities to ensure the safety and well-being of students. These protocols include clear communication channels, emergency contact information, and predefined action plans to address various emergency scenarios.</p><br />

          <div>
            <Image src="/assets/images/schoolbusoffers/contigency_plan.jpg" alt="contigency plan img" width={800} height={400} style={{maxWidth: "100%", height: "auto", width: "100%"}}/>
          </div><br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Compliance in the event of Accident & Breakdown
          </h4>
          <p>
            Urban Express shall provide roadside assistance breakdown and recovery support service for all vehicles utilized for the Transportation Solution.
            In the event of a vehicle breakdown, the driver on the vehicle will notify the Urban Express operation team and within twenty (20) minutes of the situation, a replacement vehicle will be mobilized at the breakdown / accident location.
            Urban Express will provide a detailed report to the school with reference to each vehicle breakdown / accident, including the root cause; the time taken to find a solution, and what measures will be taken to avoid such instances in the future.
          </p>
          <br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Emergency Protocols
          </h4>
          <p>
            We have established protocols for handling emergencies, including accident management and evacuation procedures. All the school bus drivers and bus attendants are well trained to handle various emergency situations.
          </p>
          <br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Accident Investigation
          </h4>
          <p>
            Our team conducts thorough investigations of any accidents, providing feedback to school administration and taking necessary corrective actions.
          </p>
          <br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Roadside Assistance
          </h4>
          <p>
            We offer roadside assistance to ensure the safety and well-being of students and staff in the event of vehicle breakdowns or emergencies.
          </p>
          <br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Parent Communication
          </h4>
          <p>
            We keep parents informed and updated on any untoward incidents or accidents, providing reassurance and support during challenging times.
          </p>
          <br />

          <h4 style={{ color: "black" }}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Driver No-Show
          </h4>
          <p>
            In cases of driver no-shows, the company has established clear escalation processes and consequences for non-compliance with behavior standards, grooming, and hygiene standards. These measures are designed to ensure accountability and reliability in driver services, with the aim of minimizing the impact of driver no-shows on scheduled trips.
          </p>
        </section>
      </Layout>
    </>
  );
}
