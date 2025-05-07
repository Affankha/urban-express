"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import {
  GoMail,
  GoDeviceMobile,
  GoCalendar,
  GoAlert,
  GoCommentDiscussion,
  GoReport,
} from "react-icons/go";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaComments,
} from "react-icons/fa";

export default function CommunicationPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Communication">
      <section
        style={{
          padding: "8% 5%",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          paddingBottom: "120px",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{ color: "#00aab5", fontSize: "2rem", marginBottom: "10px" }}
          >
            Communication
          </h2>
          <p style={{ color: "#333", fontSize: "1.1rem", lineHeight: "1.7" }}>
            We understand that effective communication is the cornerstone of a
            successful partnership between parents, schools, and our transport
            services. Our commitment extends beyond transporting students; we
            strive to create a collaborative environment where everyone is
            informed and connected. The dedicated Foreman / Parent Relations
            Executive (PRE) stays in regular communication with school
            administration to ensure smooth operations, coordinate schedules,
            and resolve concerns promptly.
          </p>
        </div>

        <div>
          <Image
            src="/assets/images/schoolbusoffers/communication.jpg"
            alt="contigency plan img"
            width={800}
            height={400}
            style={{ maxWidth: "100%", height: "auto", width: "100%" }}
          />
        </div>
        <br />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          {[
            {
              icon: (
                <GoMail
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Email",
              desc: "Used for sending important updates, newsletters, reports, and notifications to parents and schools.",
            },
            {
              icon: (
                <FaPhoneAlt
                  size={20}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Phone Calls",
              desc: "For urgent or sensitive matters such as emergencies, schedule changes, or individual concerns.",
            },
            {
              icon: (
                <FaMobileAlt
                  size={20}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Mobile Applications",
              desc: "Provides real-time tracking, notifications, and a direct communication channel for parents.",
            },
            {
              icon: (
                <GoAlert
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Text Messages (SMS)",
              desc: "Used for quick alerts, updates, reminders, or pickup/drop-off confirmations.",
            },
            {
              icon: (
                <GoCommentDiscussion
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Social Media Platforms",
              desc: "For general announcements, news, and community engagement.",
            },
            {
              icon: (
                <GoCalendar
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Meetings & Workshops",
              desc: "Periodic sessions with parents through schools to address concerns and discuss improvements.",
            },
            {
              icon: (
                <GoReport
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Surveys & Feedback Forms",
              desc: "Collects input from parents and staff to enhance transportation services.",
            },
            {
              icon: (
                <FaComments
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Newsletters / Bulletins",
              desc: "Published regularly with updates, tips, reminders, and safety information.",
            },
            {
              icon: (
                <FaChalkboardTeacher
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Parents-Teacher Meetings",
              desc: "PRE meets with parents during PTMs to resolve transport-related issues and gather feedback.",
            },
            {
              icon: (
                <GoAlert
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Safety Campaigns",
              desc: "Annual initiatives to educate students, parents, and transport staff on school transportation safety.",
            },
            {
              icon: (
                <GoCommentDiscussion
                  size={22}
                  style={{ color: "#00aab5", marginRight: "10px" }}
                />
              ),
              title: "Training & Awareness",
              desc: "Programs to educate all stakeholders on safety, policies, and operational expectations.",
            },
          ].map((method, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 calc(45% - 20px)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <div style={{ marginRight: "10px", marginTop: "5px" }}>
                {method.icon}
              </div>
              <div>
                <h4 style={{ color: "#00aab5", marginBottom: "6px" }}>
                  {method.title}
                </h4>
                <p
                  style={{
                    color: "#444",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
