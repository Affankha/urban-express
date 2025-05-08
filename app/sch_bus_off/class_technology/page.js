"use client";

import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";

export default function BestInClassTechnology() {
  
    const images=[
      {name: "gps img", imgname: "gps.jpg"},
      {name: "bus map img", imgname: "busOnMap.jpg"},
      {name: "student coutn img", imgname:"best_practice.jpg"},
      {name: "smart applicaiton img", imgname:"smart_application.jpg"},
      {name: "video survilience img", imgname:"video_survilience.jpg"},
      {name: "control center", imgname:"control_center.jpg"},
    
    ]
  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Best in Class Technology"
    >
      <section
         style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", }}
      >
        <div style={{ color: "black" }}>
          <h2 style={{ color: "#00aab5" }}>Best in Class Technology</h2>
          <p>
            We understand the importance of leveraging technology to enhance
            safety, efficiency, and communication within our transportation
            services. As part of our commitment to continuous improvement, we
            have implemented several key technological measures to ensure the
            highest standards of service delivery. These measures include:
          </p>
        </div>

        <br />

        <div style={{ color: "black" }}>
          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> GPS Tracking:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            We utilize real-time GPS tracking systems. It enables us to
            accurately track the location of each vehicle, communicate
            effectively with parents and school administration, and optimize
            route planning for maximum efficiency.
          </p>

          <br />

          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Mobile App for Parents:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            The Parents App provides parents with access to the exact location
            of their child's school bus during the trip. In addition, it records
            and communicates students' movements in and out of the buses,
            ensuring that no child is left unattended after a trip.
          </p>

          <br />

          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Electronic Attendance and Alerts:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            Student movement in and out are recorded and ensured that no child
            is left unattended after a trip.
          </p>

          <br />

          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Smart Application:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            Our Smart Application is designed to facilitate comprehensive
            monitoring of the overall performance of the fleet deployed in a
            school. This application enhances safety standards and operational
            efficiency.
          </p>

          <br />

          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Video Surveillance:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            Our buses are fitted with RTA complying CCTV monitoring system. This
            enables us to ensure the safety and well-being of students while
            also enhancing accountability and professionalism among our staff
            members.
          </p>

          <br />

          <h4 style={{color: "black"}}>
            <GoSquareFill style={{ color: "#00aab5" }} /> Control Center Monitoring:
          </h4>
          <p style={{ paddingLeft: "25px" }}>
            Control center monitors the fleet operation efficiently and ensures
            a high level of safety.
          </p>
        </div>

        <br />
        
        <div style={{display: "flex", flexWrap: "wrap", gap: '8px', justifyContent: "center", paddingBottom: "100px"}}>
          {images.map((item, index)=>(
            <Image
            key={index}
            src={`/assets/images/schoolbusoffers/${item.imgname}`}
            alt={item}
            width={400}
            height={200}
            style={{
              
              // margin: "auto",
              // marginTop: "40px",
              filter: "grayscale(100%)"
            }}
          />
          ))
          
}
        </div>
      </section>
    </Layout>
  );
}
