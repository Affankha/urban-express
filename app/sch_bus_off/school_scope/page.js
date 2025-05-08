"use client";

// import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
export default function SchoolScope() {
  // const [isOpen, setOpen] = useState(false);
  // const isMobile = window.innerWidth <= 768;
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="School Scope">
        <section style={{ paddingTop: "5%", paddingBottom: "100px", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px", }} >
          
          <div style={{color: "black"}}> 
            <h2 style={{color: "#00aab5"}}>Scoap of Services</h2></div>


            <h5 style={{color: "black"}}>Our comprehensive service ofering includes:</h5><br /><br />
            <h4 style={{color: "black"}}><GoSquareFill style={{color: "#00aab5"}}/> Operation Model
(fee collection from students)</h4>
<p style={{paddingLeft: "33px"}}>
We assume full responsibility for managing the day-to-day transportation operations at the school campus. We enter into direct contract with parents, collect transportation fees, plan routes, and mange resources.
We provide vehicles varying in diverent sizes as per routes requirement.
A dedicated Parents Relation Executive is deployed at the school to serve as a point
of contact for parents and the school.</p><br /><br />

<h4 style={{color: "black"}}><GoSquareFill style={{color: "#00aab5"}}/>Lease Model (lease of buses to schools)</h4>
<p style={{paddingLeft: "27px"}}>
The school maintains a formal contract with parents and collects transportation fees
directly from them.
We provide buses at a fixed rate determined by factors such as bus capacity, distances covered, and number of trips made.</p><br /><br />

<h4 style={{color: "black"}}><GoSquareFill style={{color: "#00aab5"}}/>Customized Model (as per school requirement)</h4>
<p style={{paddingLeft: "27px"}}>
We partner with schools to develop tailored transportation solutions that meet their
specific needs and objectives, that enhance the overall experience for students, parents, and school administrators alike.</p><br />
        </section><br /><br />
      </Layout>
    </>
  );
}




