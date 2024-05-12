import React, { useEffect } from "react";
import "./intro.css";
import bg from "../../assets/emmanuel.png";
import { IoCloudDownload } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm{" "}
          <span data-aos="zoom-in" className="introName">
            Emmanuel
          </span>{" "}
          <br />
        </span>
        <p className="introPara">
          I am a skilled Data Analyst <br /> experienced in performing{" "}
          <br /> compelling data analysis to derive
          <br /> insights from data.
        </p>
        <a
          href="https://drive.google.com/file/d/1C0IGBAZiipXg1RDvfd2j69prMsZCSgYL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
          <IoCloudDownload />  &nbsp;
            Download CV
          </button>
        </a>
      </div>
      <img src={bg} alt="My Face" className="bg" />
    </section>
  );
};

export default Intro;
