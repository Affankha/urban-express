"use client";

import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";

export default function StakeholderTrainingFramework() {
  const renderSection = (title, points, key) => (
    <div
      key={key}
      style={{
        flex: "1 1 calc(50% - 30px)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        minWidth: "280px",
      }}
    >
      <h4 style={{ color: "#00aab5", fontSize: "1.1rem", display: "flex", alignItems: "center" }}>
        <GoSquareFill style={{ marginRight: "8px" }} />
        {title}
      </h4>
      <ul style={{ paddingLeft: "20px", color: "#444", fontSize: "1rem" }}>
        {points.map((point, i) => (
          <li key={i} style={{ marginBottom: "8px", lineHeight: "1.5" }}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
  

  const stakeholderData = [
    {
      role: "Bus Supervisor",
      points: [
        "Dos and Don’ts",
        "Teamwork with school bus driver",
        "Student Management: Boarding/disembarking",
        "Parking area safety",
        "FS/KG Students dispersal and head count",
        "Electronic attendance guidelines",
        "Child safeguarding & prohibited items",
        "Seat belt safety",
        "Risk assessment and control",
        "Fire safety, First Aid training",
        "Supervisor performance and best practices",
        "Physical/mental condition affecting work",
        "Student discipline & misconduct handling",
        "Code of conduct for students and staff",
      ],
    },
    {
      role: "School Staff",
      points: [
        "Student Management",
        "Safe dispersal & parking management",
        "Communication & crisis management",
      ],
    },
    {
      role: "Parents",
      points: [
        "Safety starts at home",
        "Pickup point safety",
        "Code of conduct",
        "Bullying awareness",
        "Distracted walking & pedestrian safety",
      ],
    },
    {
      role: "Students",
      points: [
        "Pick up & drop off point safety",
        "Parking area safety",
        "Code of conduct",
        "General discipline",
      ],
    },
    {
      role: "Foreman",
      points: [
        "Pick up & drop off point safety",
        "Parking area safety",
        "Code of conduct",
        "General discipline",
      ],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stakeholder Training Framework">
      <section
        style={{
          padding: "8% 5%",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          paddingBottom: "100px",
        }}
      >
        <div>
          <div style={{ marginBottom: "30px" }}>
            <h2 style={{ color: "#00aab5", fontSize: "2rem", marginBottom: "10px" }}>
              Stakeholder Training Framework
            </h2>
            <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.7" }}>
              Urban Express Transport places paramount importance on the continuous training and
              assessment of our dedicated team members to uphold the highest standards of safety
              and service excellence. We prioritize a culture of continuous improvement, fostering
              a learning environment that keeps our staff updated on the latest industry standards
              and best practices. As a responsible transport operator, we have developed
              comprehensive training programs targeting all stakeholders and each level of
              experience.
            </p>
          </div>

          <h2 style={{ textAlign: "center", marginBottom: "20px", padding: "5px", backgroundColor: "#00aab5" }}>Bus Driver</h2>

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
                  "School Bus Rules, operation procedures, specifications, and safety",
                  "Roles, responsibilities, and duties of school bus drivers",
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
                title: "Road Safety & Traffic Regulations",
                points: [
                  "School zone regulations and speed limits",
                  "Defensive driving techniques",
                ],
              },
              {
                title: "Stakeholder Management",
                points: [
                  "Establishing a safe, welcoming, respectful, and orderly bus environment",
                  "Effective communication with school, students, and parents",
                  "Handling student discipline and conflict resolution",
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
                title: "Defensive Driving & Hazard Awareness",
                points: [
                  "Recognizing and responding to potential hazards",
                  "Lane changing, merging, and intersection safety",
                  "Handling blind spots and large vehicle challenges",
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
              {
                title: "Incident Reporting & Documentation",
                points: [
                  "Proper documentation of incidents and accidents",
                  "Reporting procedures and protocols",
                  "Understanding legal requirements",
                ],
              },
            ].map((section, idx) => renderSection(section.title, section.points, `busdriver-${idx}`))}
          </div>

          {stakeholderData.map((stakeholder, idx) => (
            <div key={idx}>
              <h2 style={{
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "20px",
                padding: "5px",
                backgroundColor: "#00aab5",
                color: "white",
              }}>
                {stakeholder.role}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "30px",
                  justifyContent: "space-between",
                }}
              >
                
                {renderSection("Training Topics", stakeholder.points, `stakeholder-${idx}`)}
                
              </div>
            </div>
          ))}
        </div>
      </section><br />
    </Layout>
  );
}










// "use client";

// import Layout from "../../../components/layout/Layout";
// import { GoSquareFill } from "react-icons/go";

// export default function StakeholderTrainingFramework() {
//   return (
//     <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Stakeholder Training Framework">
//       <section
//         style={{
//           padding: "8% 5%",
//           backgroundColor: "#f9f9f9",
//           minHeight: "100vh",
//           paddingBottom: "100px",
//         }}
//       >
//         <div>
//         <div style={{ marginBottom: "30px" }}>
//           <h2 style={{ color: "#00aab5", fontSize: "2rem", marginBottom: "10px" }}>
//             Stakeholder Training Framework
//           </h2>
//           <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.7" }}>
//             Urban Express Transport places paramount importance on the continuous training and
//             assessment of our dedicated team members to uphold the highest standards of safety
//             and service excellence. We prioritize a culture of continuous improvement, fostering
//             a learning environment that keeps our staff updated on the latest industry standards
//             and best practices. As a responsible transport operator, we have developed
//             comprehensive training programs targeting all stakeholders and each level of
//             experience.
//           </p>
//         </div>

//         <h2 style={{color: "", textAlign: "center", marginBottom: "20px",padding:"5px", backgroundColor: "#00aab5", }}>Bus Driver</h2>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "30px",
//             justifyContent: "space-between",
//           }}
//         >
//           {[
//             {
//               title: " Onboarding",
//               points: [
//                 "Urban Express vision and mission",
//                 "School Bus Rules, operation procedures, specifications, and safety",
//                 "Roles, responsibilities, and duties of school bus drivers",
//               ],
//             },
//             {
//               title: "Vehicle Operation and Maintenance",
//               points: [
//                 "Pre-trip inspections and maintenance checks",
//                 "Vehicle control and maneuvering",
//               ],
//             },
//             {
//               title: "Road Safety & Traffic Regulations",
//               points: [
//                 "School zone regulations and speed limits",
//                 "Defensive driving techniques",
//               ],
//             },
//             {
//               title: "Stakeholder Management",
//               points: [
//                 "Establishing a safe, welcoming, respectful, and orderly bus environment",
//                 "Effective communication with school, students, and parents",
//                 "Handling student discipline and conflict resolution",
//               ],
//             },
//             {
//               title: "Emergency Preparedness",
//               points: [
//                 "Emergency evacuation procedures",
//                 "First aid and CPR training",
//                 "Handling fire incidents and use of fire extinguishers",
//               ],
//             },
//             {
//               title: "Defensive Driving & Hazard Awareness",
//               points: [
//                 "Recognizing and responding to potential hazards",
//                 "Lane changing, merging, and intersection safety",
//                 "Handling blind spots and large vehicle challenges",
//               ],
//             },
//             {
//               title: "Fatigue Management & Personal Wellness",
//               points: [
//                 "Understanding the impact of fatigue on driving",
//                 "Importance of rest breaks and adequate sleep",
//                 "Healthy lifestyle habits for overall well-being",
//               ],
//             },
//             {
//               title: "Incident Reporting & Documentation",
//               points: [
//                 "Proper documentation of incidents and accidents",
//                 "Reporting procedures and protocols",
//                 "Understanding legal requirements",
//               ],
//             },
//           ].map((section, idx) => (
//             <div
//               key={idx}
//               style={{
//                 flex: "1 1 calc(50% - 30px)",
//                 backgroundColor: "#fff",
//                 padding: "20px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 minWidth: "280px",
//                 // paddingBottom: "180px",
//               }}
//             >
//               <h4 style={{ color: "#00aab5", fontSize: "1.1rem", display: "flex", alignItems: "center" }}>
//                 <GoSquareFill style={{ marginRight: "8px" }} />
//                 {section.title}
//               </h4>
//               <ul style={{ paddingLeft: "20px", color: "#444", fontSize: "1rem" }}>
//                 {section.points.map((point, i) => (
//                   <li key={i} style={{ marginBottom: "8px", lineHeight: "1.5" }}>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//         </div>

//         <div>
       

//         </div>
//       </section><br /><br />
//     </Layout>
//   );
// }
