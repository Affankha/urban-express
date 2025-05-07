"use client";

// import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function BestPractices() {
  // const [isOpen, setOpen] = useState(false);
  // const isMobile = window.innerWidth <= 768;
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Operational Best Practices"
      >
        <section
          style={{
            paddingTop: "8%",
            paddingBottom: "8%",
            paddingLeft: "50px",
            paddingRight: "50px",
            minHeight: "100vh",
            // minWidth: "500px"
          }}
        >
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Student Management</h2>
            <p style={{ color: "black" }}>
              Urban Express takes full responsibility for managing
              student-related activities to ensure a seamless and eficient
              transportation experience. This includes:
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "40px",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px", color: "black" }}>
              <br />
              <br />

              <h4 style={{ color: "black" }}>
                <GoSquareFill style={{ color: "#00aab5" }} />
                Student Registration
              </h4>
              <p style={{}}>
                We handle the registration process, maintain and update the
                student database regularly, including information such as
                pickup/drop points, timings, and any special requirements,
                ensuring accurate and up-to-date records of all students using
                our transportation services.
              </p>
              <br />

              <h4 style={{ color: "black" }}>
                <GoSquareFill style={{ color: "#00aab5" }} />
                Capacity Utilization:
              </h4>
              <p style={{paddingLeft: "25px"}}>
                Our team monitors and manages the capacity of each vehicle,
                ensuring optimal utilization while maintaining safety standards
              </p>

              <br />

              <h4 style={{ color: "black" }}>
                <GoSquareFill style={{ color: "#00aab5" }} />
                Attendance Reconciliation:
              </h4>
              
              <p style={{paddingLeft: "25px"}}>
                Our team reconciles student attendance records, ensuring
                accuracy and compliance with school requirements.
              </p>
              <br />
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/images/schoolbusoffers/best_practice.jpg"
                alt="best_practice_img"
                width={500}
                height={400}
                style={{
                  flex: "1",
                  minWidth: "300px",
                  paddingBottom: "50px",
                  marginTop: "20px",
                }}
              />
            </div>
          </div><br /><br />

          <div>
            <h4 style={{ color: "black" }}>
              <GoSquareFill style={{ color: "#00aab5" }} />
              Fleet Inspection :
            </h4>
            <p style={{paddingLeft: "25px"}}>
              Urban Express drivers peorms a through check of his bus each time
              that is put into service. If any defect or malfunction is found,
              the vehicle is sent for maintenance. Similar check is carried out
              afer the trip to ensure no child is left behind. Special inspection
              team is formed to monitor the upkeeping, performance of the
              vehicles deployed in schools and ensure implementation of best
              practices & technology.
            </p><br />

            <h4 style={{ color: "black" }}>
              <GoSquareFill style={{ color: "#00aab5" }} />
              Risk Assessment :
            </h4>
            <p style={{paddingLeft: "25px"}}>
            We carry out risk assessment of all the routes, pickup & drop  points and all aspects of transport system at the beginning of each term and field trips.
            </p><br />

            <h4 style={{ color: "black" }}>
              <GoSquareFill style={{ color: "#00aab5" }} />
              No child on board verification:
            </h4>
            <p style={{paddingLeft: "25px"}}>
            Urban Express Bus drivers and bus supervisor are trained to ensure that no child
            is left on bus:
            </p> <br />
            
            <div style={{padding: "50px", paddingTop: "2px"}}>
            <h6 style={{ color: "black" }}>
            <GoDotFill  style={{ color: "#00aab5" }} />
              
              Student count:
            </h6>
            <p style={{paddingLeft: "25px"}}>
            During KG / FS dispersal, the students count is carried from classroom so that no child is le unattended before the trip. 
            </p><br />

            <h6 style={{ color: "black" }}>
            <GoDotFill  style={{ color: "#00aab5" }} />
              
              Child check board:

            </h6>
            <p style={{paddingLeft: "25px"}}>
            The driver walks across the bus, check for any students left behind and display ‘No Student on Board’ at the rear windshield of the bus after every trip. This ensures no child is left unattended
            </p>
            </div>

          </div>
        </section>
        <br />
        
      </Layout>
    </>
  );
}
