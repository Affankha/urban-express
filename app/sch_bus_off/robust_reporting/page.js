"use client";

import Layout from "../../../components/layout/Layout";
import { FaClipboardList, FaRoute, FaTools, FaCarCrash, FaUserCheck, FaShieldAlt, FaExclamationTriangle, FaFileAlt } from "react-icons/fa";
import Image from "next/image";

export default function RobustReportingFramework() {
  const reports = [
    {
      icon: <FaClipboardList size={24} style={{ color: "#00aab5" }} />,
      title: "Attendance Report",
      description:
        "Details student attendance for each trip, including pickup and drop-off times. Helps track transportation patterns and ensure accountability.",
    },
    {
      icon: <FaRoute size={24} style={{ color: "#00aab5" }} />,
      title: "Route Efficiency Report",
      description:
        "Analyzes travel time, distance, and identifies delays or bottlenecks to optimize route planning.",
    },
    {
      icon: <FaTools size={24} style={{ color: "#00aab5" }} />,
      title: "Vehicle Maintenance Report",
      description:
        "Provides maintenance schedule and history for each vehicle, including inspections, repairs, and servicing.",
    },
    {
      icon: <FaCarCrash size={24} style={{ color: "#00aab5" }} />,
      title: "Accident & Incident Report",
      description:
        "Documents all transport-related incidents, including actions taken and recommendations for prevention.",
    },
    {
      icon: <FaUserCheck size={24} style={{ color: "#00aab5" }} />,
      title: "Driver Performance Report",
      description:
        "Evaluates driver performance on punctuality, safety compliance, service quality, and vehicle handling.",
    },
    {
      icon: <FaShieldAlt size={24} style={{ color: "#00aab5" }} />,
      title: "Compliance Report",
      description:
        "Confirms adherence to regulations, safety standards, and contractual obligations.",
    },
    {
      icon: <FaExclamationTriangle size={24} style={{ color: "#00aab5" }} />,
      title: "Risk Assessment Report",
      description:
        "Comprehensive evaluation of all routes and field trips at the start of the academic year for student safety.",
    },
    {
      icon: <FaFileAlt size={24} style={{ color: "#00aab5" }} />,
      title: "Emergency Preparedness Report",
      description:
        "Outlines protocols, communication strategies, and training for managing emergencies effectively.",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Robust Reporting Framework">
      <section  style={{ paddingTop: "5%", paddingBottom: "120px", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px",  }}>
        <div style={{ marginBottom: "30px" }}>

          <h2 style={{ color: "#00aab5", fontSize: "2rem", marginBottom: "10px" }}>
            Robust Reporting Framework
          </h2>
          <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.7" }}>
            Urban Express Transport is committed to transparency, accountability, and collaboration with school administrations.
            We provide detailed reports that offer insights into various aspects of our transportation service to ensure smooth,
            compliant, and efficient operations.
          </p>
        </div>
        
        <div style={{ width: "100%", maxWidth: "100%",  }}>
  <Image
    src="/assets/images/schoolbusoffers/robust_reporting.jpg"
    alt="Robust Reporting"
    width={800}
    height={400}
    style={{
      width: "100%",
      
      
      objectFit: "cover",
      filter: "grayscale(100%)" 
      
    }}
  />
</div><br />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          {reports.map((report, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 calc(45% - 20px)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div style={{ marginRight: "15px", marginTop: "5px" }}>{report.icon}</div>
              <div>
                <h4 style={{ color: "#00aab5", marginBottom: "6px" }}>{report.title}</h4>
                <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {report.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section><br />
    </Layout>
  );
}
