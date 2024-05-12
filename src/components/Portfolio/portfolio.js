import React, { useState } from "react";
import "./portfolio.css";
import Project1 from "../../assets/nypd-patch.png";
import Project2 from "../../assets/bike.jpg";
import Project3 from "../../assets/portfolio-3.png";
import Project4 from "../../assets/portfolio-4.png";
// import Project5 from "../../assets/portfolio-5.png";
// import Project6 from "../../assets/portfolio-6.png";
// import Project7 from "../../assets/portfolio-6.png";
// import Project8 from "../../assets/portfolio-6.png";
// import Project9 from "../../assets/portfolio-6.png";

const projectsData = [
  {
    title: "NYPD Arrests Analysis",
    image: Project1,
    link: "https://public.tableau.com/views/NYPDYearlyArresotAnalysis2006-2023/Dashboard1-Overview?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Bike Demand Prediction | ML",
    image: Project2,
    link: "https://github.com/egligbe1/Bike-Demand-Prediction",
  },
  {
    title: "Project 3",
    image: Project3,
    link: "https://example.com/project3",
  },
  {
    title: "Project 4",
    image: Project4,
    link: "https://example.com/project4",
  },
  // {
  //   title: "Project 5",
  //   image: Project5,
  //   link: "https://example.com/project5",
  // },
  // {
  //   title: "Project 6",
  //   image: Project6,
  //   link: "https://example.com/project6",
  // },
  // {
  //   title: "Project 7",
  //   image: Project7,
  //   link: "https://example.com/project7",
  // },
  // {
  //   title: "Project 8",
  //   image: Project8,
  //   link: "https://example.com/project8",
  // },
  // {
  //   title: "Project 9",
  //   image: Project9,
  //   link: "https://example.com/project9",
  // },
];

const Portfolio = () => {
  const [displayedProjects, setDisplayedProjects] = useState(3); // Initial number of projects to display

  const showMoreProjects = () => {
    setDisplayedProjects((prevCount) => prevCount + 3); // Increase the count by 6 to show more projects
  };

  const allProjectsDisplayed = displayedProjects >= projectsData.length;

  return (
    <section id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <span className="projectsDesc">
        As a passionate and dedicated individual in Data Analytics, I've had the
        opportunity to contribute to various projects that reflect my skills,
        creativity, and commitment. Each project has been a unique journey,
        allowing me to <span>learn and grow</span>. Below, you'll find a glimpse
        of the diverse range of projects I've been involved in. Feel free to
        explore and get a sense of my work and the enthusiasm I bring to every
        endeavor.
      </span>

      <div className="projectImages">
        {projectsData.slice(0, displayedProjects).map((project, index) => (
          <div key={index} className="projectContainer">
            <a
              href={project.link}
              className="viewOverlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            <img src={project.image} alt="" className="projectImg" />
            <div className="projectTitle">{project.title}</div>
            <br />
            <a
              href={project.link}
              className="viewOverlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        ))}
      </div>

      <button
        className="moreProjectsBtn"
        onClick={showMoreProjects}
        disabled={allProjectsDisplayed}
      >
        See More
      </button>
    </section>
  );
};

export default Portfolio;
