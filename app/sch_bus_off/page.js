"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Banner from "../../components/sections/home1/Banner";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

export default function SchoolBusOffers() {
  const data = [
    {
      school_scoap_service: "School scope services",
      des: "Our comprehensive service opering includes Operation Model free collection from students, lease of buses to schools, customize Model",
      ID: "school_scope",
    },
    {
      operation_plan: "operation plan and safety",
      des: "Safety Standards The Operational Plan outlines the standards and requirements, including driver qualifications, fleet capacity, routine and periodic maintenance protoco",
      ID: "plan_and_safety",
    },

    {
      operation_plan: "operational Best Practices",
      des: "Urban Express takes full responsibility for managing student-related activities to ensure a seamless and eficient transportation experience. ",
      ID: "best_practices",
    },

    {
      route_planning: "Route Planning",
      des: "Planning Eficient Routes, Route testing, Stakeholder Communication",
      ID: "route_planning",
    },
    {
      route_planning: "Best in Class Technology",
      des: "We understand the importance of leveraging technology to enhance safety, eficiency, and communication within our transportation services.",
      ID: "class_technology",
    },
    {
      route_planning: "Vehicle and Driver Standards",
      des: "Planning Eficient Routes, Route testing, Stakeholder Communication",
      ID: "standards",
    },
    {
      contigency_plan: "Stackholder Training Framwork",
      des: "Bus Driver Training adn Bus supervisor Training framworks",
      ID: "stackholder",
    },
    {
      contigency_plan: "Countigency Plan",
      des: "In the event of emergencies, the company has established protocols for immediate response and coordination with relevant authorities to ensure the safety and well-being of students.",
      ID: "countigency_plan",
    },
    {
      servcie_qualit: "Service Quality",
      des: "Commitment to High Standards Reflects our commitment to maintaining high standards of quality management and operational excellence",
      ID: "service_quality",
    },
    {
      servcie_qualit: "comunication",
      des: "We understand that efective communication is the cornerstone of a successful partnership between parents, schools, and our transport services. In recognizing the importance of keeping all stakeholders informed and connected",
      ID: "communication",
    },
    {
      robust_reporting: "Robust Reporting",
      des: "We are committed to maintain transparency, accountability and efective collaboration to the schools that we serve. To aid this goal, we provide the following reports to the school’s administration",
      ID: "robust_reporting",
    },
    {
      complain_resolution: "Complain Resolution & Escalation Matrix  ",
      des: "The implementation of an escalation matrix is crucial for addressing issues and challenges that may arise during the delivery of transportation services",
      ID: "complain_resolution",
    },
  ];
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="School Bus Offers"
      >
        <section
          style={{ paddingTop: "8%", paddingBottom: "8%", minHeight: "100vh" }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
          >
            <div>
              <h3 className="">Our School Bus Service Offers</h3>
            </div>

            {data.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="transition-shadow"
              >
                <Link href={`/sch_bus_off/${item.ID}`}>
                  <div
                    className="bus_titles"
                    key={index}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      justifyContent: "space-between",
                      maxWidth: "1200px",
                      margin: "0 auto",
                      padding: "20px",
                    }}
                  >
                    <div
                      style={{
                        transition: "all 0.3s ease-in-out",
                        border: "2px solid #00aab5",
                        padding: "20px",
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                        
                        
                      }}
                    >
                      <h4 style={{ color: "black" }}>
                        {Object.values(item)[0]}
                      </h4>
                      <div>
                        <p className="text-2xl">{item.des}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        <br />
        <br />
      </Layout>
    </>
  );
}
