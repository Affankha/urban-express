"use client";

// import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { GoSquareFill } from "react-icons/go";
import Image from "next/image";
import styles from "./client_scoap.module.css";

export default function SchoolScope() {
  // const [isOpen, setOpen] = useState(false);
  // const isMobile = window.innerWidth <= 768;
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Client Scope">
        <section
           style={{ paddingTop: "5%", paddingBottom: "5%", minHeight: "100vh" , marginLeft: "10%", marginRight: "10%", paddingLeft: "15px", paddingRight: "15px",  }}
        >
          <div style={{ color: "black" }}>
            <h2 style={{ color: "#00aab5" }}>Scoap of Services</h2>
          </div>

          <h5 style={{ color: "black" }}>
            Our comprehensive service ofering includes:
          </h5>
          <br />
          <br />
          <div style={{display: "flex"}}>
           <div><GoSquareFill style={{ color: "#00aab5", }} /></div>
          <h4 style={{ color: "black", }}>
            Timely Driver Reporting
          </h4></div>
          <p style={{ paddingLeft: "25px",  textAlign:"justify"}}>
            Our service ensures that all drivers report for duty well in advance
            of scheduled pick-ups. We follow a strict protocol to ensure that
            our drivers arrive early at each location, allowing ample time for
            preparation and ensuring that there are no delays. By arriving ahead
            of time, we are able to verify that the vehicle is ready and that
            all arrangements are in place for a seamless experience. This
            proactive approach minimizes the risk of late arrivals and ensures
            that our clients' schedules are never compromised.
          </p>
          <br />
          <br />

       
          <div style={{display: "flex"}}>
           <div><GoSquareFill style={{ color: "#00aab5", }} /></div>
          <h4 style={{ color: "black", }}>
           Quality Inspection for Vehicle Cleanliness
          </h4></div>
          <p style={{ paddingLeft: "25px" }}>
            We pride ourselves on maintaining a fleet of vehicles that are not
            only luxurious but also impeccably clean. Each vehicle undergoes a
            comprehensive quality inspection before every trip. Our maintenance
            team performs a full sweep of the vehicle’s interior and exterior,
            ensuring that the vehicle is spotless, odor-free, and fully stocked
            with amenities. We ensure that the upholstery, flooring, windows,
            and surfaces are all cleaned thoroughly. Our vehicles are equipped
            with various passenger amenities, creating a fresh and pleasant
            environment for every journey
          </p>
          <br />

          <div style={{display: "flex"}}>
           <div><GoSquareFill style={{ color: "#00aab5", }} /></div>
          <h4 style={{ color: "black", }}>
          Driver Uniform and Professionalism-
          </h4></div>
          <p style={{ paddingLeft: "25px" }}>
            Our drivers are the face of our service, and we ensure they maintain
            a professional and polished appearance. All of our drivers are
            dressed in formal uniforms, ensuring they meet the high standards of
            professionalism that our clients expect. They are trained in
            providing excellent customer service, including greeting passengers
            with courtesy and maintaining a respectful and pleasant demeanor
            throughout the ride. Our drivers are also well-versed in local
            geography, ensuring eficient routes, and have exceptional knowledge
            of safety procedures to ensure your well-being during every trip
          </p>
          <br />

          
          <div style={{display: "flex"}}>
           <div><GoSquareFill style={{ color: "#00aab5", }} /></div>
          <h4 style={{ color: "black", }}>
          Meet and Greet Assistance at the Airport
          </h4></div>
          <p style={{ paddingLeft: "25px" }}>
            We provide personalized “Meet and Greet” services at airports,
            ensuring that clients are welcomed and assisted right from the
            moment they arrive. Upon landing, our driver will be waiting at the
            designated arrival point holding a sign with the client’s name, so
            they can easily spot them. The driver will help with luggage and
            guide them to the vehicle, providing a smooth and stress-free
            transition from the airport to their destination. Our Meet and Greet
            service is designed to ensure a seamless, VIP experience from the
            moment you land until your destination is reached.
          </p>
          <br />

          
          <div style={{display: "flex"}}>
           <div><GoSquareFill style={{ color: "#00aab5", }} /></div>
          <h4 style={{ color: "black", }}>
          24/7 Operations Support
          </h4></div>
          <p style={{ paddingLeft: "25px" }}>
            Our transportation service operates around the clock to provide
            clients with the utmost convenience and peace of mind. Whether it’s
            a late-night airport transfer or an early morning corporate event,
            we are available 24/7 to meet your transportation needs. Our
            customer support team is always ready to assist with any questions
            or changes to reservations, and we can accommodate last-minute
            requests or changes with ease. If there’s an emergency or sudden
            change in travel plans, our dedicated operations team ensures a
            quick and eficient response. You can rest assured that whenever you
            need us, we’ll be there to deliver a timely and reliable service..
          </p>
          <br />
        

        <div className={styles.imageContainer} style={{paddingBottom: "100px"}}>
            <Image
              src="/assets/images/clientbusoffers/scoap1.png"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
              style={{filter: "grayscale(100%)"}}
              />
            <Image
              src="/assets/images/clientbusoffers/scoap2.png"
              alt="school bus"
              width={600}
              height={300}
              className={styles.image}
              style={{filter: "grayscale(100%)"}}
              />
          </div >
          </section>
      </Layout>
    </>
  );
}
