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
           style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", }}
        >
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Operational Best Practices</h2>
            <br />
            <h4 style={{ color: "#00aab5" }}>Student Management</h4>
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
              gap: "20px",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px", color: "black" }}>
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
              <p style={{ paddingLeft: "25px" }}>
                Our team monitors and manages the capacity of each vehicle,
                ensuring optimal utilization while maintaining safety standards
              </p>

              <br />

              <h4 style={{ color: "black" }}>
                <GoSquareFill style={{ color: "#00aab5" }} />
                Attendance Reconciliation:
              </h4>

              <p style={{ paddingLeft: "25px" }}>
                Our team reconciles student attendance records, ensuring
                accuracy and compliance with school requirements.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                // padding: "20px",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="/assets/images/schoolbusoffers/Rejistar_Ride-01.png"
                alt="best_practice_img"
                width={600}
                height={300}
                // sizes="100vw"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  // paddingBottom: "20px",
                  filter: "grayscale(100%)"
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: "1", minWidth: "300px", color: "black" }}>
              <h4 style={{color: "black"}}>
                <GoSquareFill style={{ color: "#00aab5" }} /> Fleet Inspection
              </h4>
              <p style={{ paddingLeft: "25px" }}>
                Urban Express drivers perform a thorough check of the bus each
                time it is put into service. If any defect or malfunction is
                found, the vehicle is sent for maintenance. A similar check is
                carried out after the trip to ensure no child is left behind. A
                special inspection team monitors vehicle upkeep and best
                practices.
              </p>

              <br />
              <h4 style={{color: "black"}}>
                <GoSquareFill style={{ color: "#00aab5" }} /> Risk Assessment
              </h4>
              <p style={{ paddingLeft: "25px" }}>
                We carry out risk assessments of all routes, pickup & drop
                points, and all aspects of the transport system at the beginning
                of each term and field trips.
              </p>

              <br />
              <h4 style={{color: "black"}}>
                <GoSquareFill style={{ color: "#00aab5" }} /> No Child on Board
                Verification
              </h4>
              <p style={{ paddingLeft: "25px" }}>
                Urban Express drivers and bus supervisors are trained to ensure
                that no child is left on board.
              </p>

              <div style={{ padding: "50px", paddingTop: "2px" }}>
                <h6 style={{color: "black"}}>
                  <GoDotFill style={{ color: "#00aab5" }} /> Student Count
                </h6>
                <p style={{ paddingLeft: "25px" }}>
                  During KG / FS dispersal, the student count is taken from the
                  classroom so no child is left unattended before the trip.
                </p>

                <br />
                <h6 style={{color: "black"}}>
                  <GoDotFill style={{ color: "black" }} /> Child Check Board
                </h6>
                <p style={{ paddingLeft: "25px" }}>
                  The driver walks across the bus, checks for any students left
                  behind, and displays ‘No Student on Board’ at the rear
                  windshield after every trip.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                // padding: "20px",
                boxSizing: "border-box",
              }}
            >
              <Image
                src="/assets/images/schoolbusoffers/fleetinspection.jpg"
                alt="fleet_inspection"
                width={600}
                height={300}
                // sizes="100vw"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  filter: "grayscale(100%)"
                }}
              />
            </div>
          </div>
        </section>
        <br />
      </Layout>
    </>
  );
}
