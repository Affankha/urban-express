"use client";

import Layout from "../../../components/layout/Layout";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

export default function VehicleAndDriverStandards() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vehicle & Driver Standards">
      <section
         style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", }}
      >
        <h2 style={{ color: "#00aab5" }}>Vehicle Standards</h2>
        <p>
          At Urban Express we ensure that all vehicles are maintained in excellent condition
          as prescribed by the manufacturer and comply with the regulatory authority and
          requisite safety standards. Urban Express complies with best industry standards for vehicles:
        </p>
        <ul style={{ paddingLeft: "15px", marginTop: "10px", }}>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Washing and sanitization of vehicles will be carried out as per internal procedures.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles will be equipped with basic safety equipment like emergency hammers and first aid kits.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles will be equipped with GPS and CCTV cameras.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles will be subject to annual inspection by the competent local authority.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicle AC will remain functional irrespective of the season.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Entry/exit points will have handgrips for student safety.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles will have emergency windows and clearly lit emergency exit signs.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Vehicles will be equipped with seat belts for student safety.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Comprehensive insurance coverage for all vehicles and passengers.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Urban Express assumes liability for any unforeseen incidents during transportation.</p>
        </ul><br />

        <div style={{justifyContent: "center", display: "flex"}}>
          <Image src="/assets/images/schoolbusoffers/vehicle_standards.jpg" alt="Vehicle standards" width="800" height="400" style={{   maxWidth: "100%", height: "auto",filter: "grayscale(100%)"}}/>
        </div>

        <br />

        <h2 style={{ color: "#00aab5" }}>Driver Standards</h2>
        <p>
          Urban Express hires qualified and experienced drivers. Our operational success depends on high driver standards:
        </p>
        <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
          <p><GoDotFill style={{ color: "#00aab5" }} /> All drivers possess valid driving licenses.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Drivers are well-groomed, disciplined, and periodically trained.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Clients may request replacement of drivers not meeting contractual standards.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Driving under fatigue or alcohol influence is strictly prohibited.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Drivers can communicate appropriately in English.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Drivers follow child safeguarding policies and ethical behavior standards.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Overloading of students is not allowed.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Emergency contact numbers will be displayed in each vehicle.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Use of handheld devices while driving is strictly prohibited.</p>
          <p><GoDotFill style={{ color: "#00aab5" }} /> Comprehensive training includes health, safety, student management, and code of conduct.</p>
        </ul><br />
        
        <div style={{justifyContent: "center", display: "flex",  }}>
          <Image src="/assets/images/schoolbusoffers/driver_standards.png" alt="Vehicle standards" width="800" height="400" style={{ paddingBottom: "50px", maxWidth: "100%", height: "auto",filter: "grayscale(100%)", }}/>
        </div>
      </section><br />
    </Layout>
  );
}
