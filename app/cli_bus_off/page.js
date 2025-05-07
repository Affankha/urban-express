"use client";

import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Banner from "../../components/sections/home1/Banner";
import { motion } from "framer-motion";
// import { useState } from "react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function ClientBusOffers() {
  const data = [
    {
      school_scoap_service: "Client scope of services",
      des: "Our comprehensive service ofering includes Timely Driver Reporting , Quality Inspection for Vehicle Cleanliness and 24/7 Operations Support",
      ID: "client_scoap",
    },
    {
      operation_plan: "operation plan and safety",
      des: "Safety Standards The Operational Plan outlines the standards and requirements, including driver qualifications, fleet capacity, routine and periodic maintenance protoco",
      ID: "clie_plan_safety",
    },
    
    {
      operation_plan: "Vehicle and Driver Standards",
      des: "At Urban Express we ensure that all vehicles are maintained in excellent condition as prescribed by the manufacturer and comply with the regulatory authority and requisite safety standards.",
      ID: "client_standards",
    },

    {
      route_planning: "Training Framwork",
      des: "Urban Express Transport places paramount importance on the continuous training and assessment of our dedicated team members to uphold the highest standards of safety and service excellence.",
      ID: "training_framwork",
    },
    {
      contigency_plan: "Countigency Plan",
      des: "In the event of emergencies, the company has established protocols for immediate response and coordination with relevant authorities to ensure the safety and well-being of students.",
      ID: "clie_contigency_plan",
    },
    {
      servcie_qualit: "Service Quality Policy",
      des: "Commitment to High Standards Reflects our commitment to maintaining high standards of quality management and operational excellence",
      ID: "clie_service_quality",
    },
    {
      robust_reporting: "Robust Reporting",
      des: "We are committed to maintain transparency, accountability and efective collaboration to the client that we serve. To aid this goal, we provide the following reports to our clients:",
      ID: "clie_robust_reporting",
    },
    {
      complain_resolution: "Complain Resolution & Escalation Matrix  ",
      des: "The implementation of an escalation matrix is crucial for addressing issues and challenges that may arise during the delivery of transportation services",
      ID: "clie_complain_resolution",
    },
  ];
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Client Bus Offers"
      >
        <section style={{ paddingTop: "8%", paddingBottom: "8%", minHeight: "100vh", paddingBottom: "130px" }} >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
            <div>
              <h3 className="">Our Client Bus Service Offers</h3>
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
              <Link href={`/cli_bus_off/${item.ID}`}>
              <div
              className="bus_titles"
                key={index}
                style={{
                  display:"flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "space-between",
                  maxWidth: "1200px",
                  margin: "0 auto",
                  padding: "20px",
                  
                }}>

                <div style={{border: "2px solid #00aab5", padding: "20px", width:"100%", borderRadius: "10px",}}>
                  <h4  style={{ color: "black" }}>
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
        </section><br /><br />
      </Layout>
    </>
  );
}
