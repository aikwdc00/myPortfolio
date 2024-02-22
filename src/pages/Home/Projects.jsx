import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

// components
import CustomImage from "@components/CustomImage";

// data
import { projects } from "@Data/ProjectsData";

// custom hooks
import useHttp from "@hooks/use-http";

const variants = {
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.25 },
  },
  offscreen: {
    scale: 0.1,
  },
};

function Projects() {
  const { currentTheme, isDark } = useSelector((state) => state.theme);
  const { currentLanguage, isEN } = useSelector((state) => state.language);

  const navigate = useNavigate();

  const goToProjectDetail = (id) => {
    navigate(`/projects/${id}`);
  };

  // const {
  //   sendRequest: fetchProjectsData,
  //   status,
  //   data: ProjectsData,
  // } = useHttp(() => { }); // sign in

  // useEffect(() => {
  //   sendRequest();
  // }, []);

  return (
    <div className={`sectionArea projectsContainer ${currentTheme}-bg-linear`}>
      <div className="section-container">
        <h3 id="projects" className={`dark-color sectionTitle`}>
          // {`${isEN ? `Projects.` : `專案`} `}
        </h3>

        <motion.div
          className="projectsContainer-projectWrap"
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <div
              className={`projectsContainer-projectWrap-card ${isDark ? `dark` : `light`}`}
              key={index}
              onClick={goToProjectDetail.bind(this, project.id)}
            >
              <div className="cardHeader">
                <CustomImage
                  src={project.banner}
                  alt={`Logo`}
                  styles={`card-img`}
                  img2={project.banner}
                  img3={project.banner}
                />
              </div>

              <div className="cardBody">
                <h4 className={`cardTitle ${currentTheme}-color`}>
                  {project.title}
                </h4>
                <p className={`cardDescription ${currentTheme}-color`}>
                  {project[`${currentLanguage}_description`]}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
