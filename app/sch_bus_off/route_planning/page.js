"use client";

// import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";

export default function RoutePlanning() {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Route Planning" >
        <section
          style={{
            paddingTop: "8%",
            paddingBottom: "8%",
            paddingLeft: "50px",
            paddingRight: "50px",
            
          }}
          
        >
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Route Planning</h2>
          </div>

          <p style={{ color: "black" }}>
            We oversee all aspects of fleet management to ensure the safe and
            eficient operation of our vehicles. This includes:
          </p>
          <br />
          <div style={{  display: "flex", justifyContent: "space-between",alignItems: "center", flexWrap: "wrap", gap: "40px" , overflow: "hidden", }}>

          <div style={{flex: "1", minWidth: "300px", color: "black"}}>
          <h4 style={{ color: "black" }}><GoSquareFill style={{color: "#00aab5"}}/>Planning Eficient Routes</h4>
          <p style={{paddingLeft: "25px"}}>
          Our team plans and optimizes transportation routes to minimize travel time and maximize eficiency.
          </p>
          <br />
          

          <h4 style={{ color: "black" }}><GoSquareFill style={{color: "#00aab5"}}/>Route testing
          </h4>
          <p style={{paddingLeft: "25px"}}>
          We conduct trial runs to assess route feasibility and make necessary adjustments for smooth operations.
          </p>
          <br />
          

          <h4 style={{ color: "black" }}><GoSquareFill style={{color: "#00aab5"}}/>Stakeholder Communication
          </h4>
          <p style={{paddingLeft: "25px"}}>
          We provide parents and schools with timely and relevant information regarding transportation schedules, route changes, and other relevant updates.
          </p>
          </div>
        
        <div>
          <Image src="/assets/images/schoolbusoffers/1111.jpg" alt="route_planing_img" width={500} height={300}/>
        </div><br />
        </div><br /><br />
        </section>
      </Layout>
    </>
  );
}
