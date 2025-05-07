"use client"; // This marks the component as a Client Component

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_c6fiboc"; // Replace with your EmailJS service ID
    const templateID ="template_ol3fsuy"; // Replace with your EmailJS template ID
    const userID = "B-S0cIo8rOTl-ZQ-1"; // Optional: Replace with your EmailJS user ID

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
        setIsSubmitting(false);
        e.target.reset(); // Reset the form after submission
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
        alert("Failed to send your message. Please try again later.");
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-page__form contact-form-validated"
    >
      <div className="row">
        <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
          <div className="contact-page__input-box">
            <input
              type="text"
              placeholder="Your Name*"
              name="name"
              required
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12">
          <div className="contact-page__input-box">
            <input
              type="email"
              placeholder="Your Email*"
              name="email"
              required
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
        <div className="col-xl-12 col-lg-12">
          <div className="contact-page__input-box">
            <input
              type="text"
              placeholder="Phone*"
              name="phone"
              required
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="contact-page__input-box text-message-box">
            <textarea
              type="text"
              placeholder="Message*"
              name="msg"
              
              required
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "100%",
                height: "100px",
                boxSizing: "border-box",
              }}
            ></textarea>
          </div>
          <div className="contact-page__btn-box">
            <button
              type="submit"
              className="thm-btn contact-page__btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {isSubmitted && (
            <p style={{ color: "green", marginTop: "10px" }}>
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
