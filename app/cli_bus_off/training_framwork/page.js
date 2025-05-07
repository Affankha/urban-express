"use client";

import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";

export default function TrainingFramework() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Training Framework">
      <section
        style={{
          padding: "8% 5%",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#00aab5", fontSize: "2rem", marginBottom: "10px" }}>
            Training Framework
          </h2>
          <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.7" }}>
            Urban Express Transport places paramount importance on the continuous training and
            assessment of our dedicated team members to uphold the highest standards of safety
            and service excellence. We prioritize a culture of continuous improvement, fostering
            a learning environment that keeps our staff updated on the latest industry standards
            and best practices. As a responsible transport operator, we have developed
            comprehensive training programs targeting all stakeholders and experience levels.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          {[
            {
              title: "Onboarding",
              points: [
                "Urban Express vision and mission",
                "Rules, operation procedure, specifications, safety",
                "Roles, responsibilities and duties of drivers",
              ],
            },
            {
              title: "Emergency Preparedness",
              points: [
                "Emergency evacuation procedures",
                "First aid and CPR training",
                "Handling fire incidents and use of fire extinguishers",
              ],
            },
            {
              title: "Vehicle Operation and Maintenance",
              points: [
                "Pre-trip inspections and maintenance checks",
                "Vehicle control and maneuvering",
              ],
            },
            {
              title: "Defensive Driving & Hazard Awareness",
              points: [
                "Recognizing and responding to potential hazards",
                "Lane changing, merging, and intersection safety",
                "Handling blind spots and large vehicle challenges",
                "Safe following distances and speed management",
              ],
            },
            {
              title: "Road Safety & Traffic Regulations",
              points: [
                "Zone regulations and speed limits",
                "Defensive driving techniques",
              ],
            },
            {
              title: "Incident Reporting & Documentation",
              points: [
                "Proper documentation of incidents and accidents",
                "Understanding legal requirements",
              ],
            },
            {
              title: "Fatigue Management & Personal Wellness",
              points: [
                "Understanding the impact of fatigue on driving",
                "Importance of rest breaks and adequate sleep",
                "Healthy lifestyle habits for overall well-being",
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 calc(50% - 30px)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "280px",
              }}
            >
              <h4
                style={{
                  color: "#00aab5",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <GoSquareFill style={{ marginRight: "8px" }} />
                {section.title}
              </h4>
              <ul style={{ paddingLeft: "20px", color: "#444", fontSize: "1rem" }}>
                {section.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "8px", lineHeight: "1.5" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <br />
      <br />
    </Layout>
  );
}
