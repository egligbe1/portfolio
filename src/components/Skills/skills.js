import React from "react";
import DataVisualization from "../../assets/data-visualization.png";
import EDA from "../../assets/exploratory-analysis.png";
import MachineLearning from "../../assets/machine-learning.png";
import WebDevelopment from "../../assets/WebDevelopment.png";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <span className="skillDesc">
        As a data analyst, I leverage advanced analytical techniques and
        proficiency in tools like Python, SQL, and Tableau to extract valuable
        insights from complex datasets. My expertise spans data cleaning,
        exploratory analysis, and predictive modeling. I excel in transforming
        raw data into actionable recommendations, ensuring informed
        decision-making.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={EDA} alt="EDA" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Analysis</h2>
            <p>
              I am able to conduct thorough exploratory analysis on data to
              uncover meaningful insights and patterns within datasets.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={DataVisualization}
            alt="Data Visualization"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Visualization</h2>
            <p>
              I build impactful dashboards and reports to present complex
              findings in data in a simplified way.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={MachineLearning}
            alt="Machine Learning"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Engineering</h2>
            <p>
              Ability to extract raw data from multiple sources, format and
              transform them into meaningful form for storage and analysis.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={WebDevelopment}
            alt="Web Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Designing and building of websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
