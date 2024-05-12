import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
// import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/xx.webp";
// import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedin_logo_icon_187302.png";
import GitHubIcon from "../../assets/github_logo.png";

const Contact = () => {
  const form = useRef();
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_57nfthe", "template_24sgmzu", form.current, {
        publicKey: "4-YwjfhSpJXtfimXC",
      })
      .then(
        () => {
          console.log("Message sent successfully!");
          setFormSubmissionStatus("success");
        },
        (error) => {
          console.log("Error sending message:", error.text);
          setFormSubmissionStatus("error");
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h2 className="clientsTitle">My Clients</h2>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies,
          and here are a few them.
        </p>
        <div className="clientImages">
          <img src={Walmart} alt="walmart" className="clientImg" />
          <img src={Microsoft} alt="microsoft" className="clientImg" />
          <img src={Facebook} alt="facebook" className="clientImg" />
          <img src={Adobe} alt="adobe" className="clientImg" />
        </div>
      </div>

      <div id="contactArea">
        <h2 className="contactPageTitle">Contact Me</h2>
        <span className="contactPageDesc">
          Please fill the form below to leave a message for me.
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Name"
            name="from_name"
          />
          <input
            type="text"
            className="email"
            placeholder="Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            id=""
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div
            className="status-message"
            style={{ display: formSubmissionStatus ? "block" : "none" }}
          >
            {formSubmissionStatus === "success"
              ? "Message sent successfully!"
              : "Error sending message. Please try again."}
          </div>

          {/* Link */}
          <div className="links">
            <a
              href="https://linkedin.com/in/emmanuelgligbe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn" className="link" />
            </a>
            <a
              href="https://github.com/egligbe1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubIcon} alt="GitHub" className="link" />
            </a>

            <a
              href="https://twitter.com/PaaQhuesi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="twitter icon" className="link" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="instagram icon" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
