import React from "react";
import DataVisualization from "../../assets/data-visualization.png";
import EDA from "../../assets/exploratory-analysis.png";
import MachineLearning from "../../assets/machine-learning.png";
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
            <h2>Exploratory Data Analysis</h2>
            <p>
              Proficient in conducting thorough exploratory data analysis to
              uncover insights and patterns within datasets.
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
              Ability to present complex findings in visually impactful
              dashboards and reports.
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
            <h2>Machine Learning</h2>
            <p>
              Familiarity with machine learning concepts and algorithms for
              tasks like classification and regression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
