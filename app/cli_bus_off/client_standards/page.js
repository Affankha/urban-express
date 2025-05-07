"use client";

import Layout from "../../../components/layout/Layout";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

export default function ClientStandards() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vehicle & Driver Standards">
      <section
        style={{
          paddingTop: "8%",
          paddingBottom: "8%",
          paddingLeft: "50px",
          paddingRight: "50px",
          minHeight: "100vh",
          color: "black",
        }}
      >
        <h2 style={{ color: "#00aab5" }}>Vehicle Standards</h2>
        <p>
        At Urban Express we ensure that all vehicles are maintained in excellent condition as
        prescribed by the manufacturer and comply with the regulatory authority and requisite safety standards. Urban Express complies with best Industry standard for vehicles:
        </p>
        <ul style={{ paddingLeft: "15px", marginTop: "10px", }}>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Washing and sanitization of vehicles will be carried out as per internal procedures.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} />  Vehicles will be equipped with GPS, CCTV camera.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} />  Vehicles will be subject to annual inspection by the competent local authority.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles AC will be in functional condition irrespective of the season.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> We carry comprehensive insurance coverage for all vehicles and passengers. Our company assumes liability for any unforeseen incidents during the transportation service</p>
          
        </ul><br />

        <div style={{justifyContent: "center", display: "flex"}}>
          <Image src="/assets/images/clientbusoffers/vehicle_standards.png" alt="Vehicle standards" width="400" height="200" style={{   maxWidth: "100%", height: "auto"}}/>
        </div>

        <br />

        <h2 style={{ color: "#00aab5" }}>Driver Standards</h2>
        <p>
        Urban Express hires qualified and experience drivers. The success of our operation
        reflects in various driver standards followed by Urban Express:
        </p>
        <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
          <p><GoDotFill style={{ color: "#00aab5" }} />  Drivers will possess a valid driving license.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Drivers will be well-groomed and well-disciplined.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} />  Drivers will be trained periodically to drive their respective vehicles.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} />  The client has the right to request the replacement of a driver should they, upon reasonable inspection and review, fall short of the   standards set out</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Drivers will never drive while fatigued or under
          having consumed any alcohol.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Every driver will be able to communicate appropriately in English Language.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Strictly no handheld devices while driving the vehicle by the drivers.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Driver will be provided comprehensive training on guest management, health and safety protocols, and code of conduct. </p>
         
        </ul><br />
        
        <div style={{justifyContent: "center", display: "flex",  }}>
          <Image src="/assets/images/clientbusoffers/driver_standards.png" alt="Vehicle standards" width="800" height="400" style={{ paddingBottom: "50px", maxWidth: "100%", height: "auto", }}/>
        </div>
      </section><br />
    </Layout>
  );
}
