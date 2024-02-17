import React from 'react'
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

// components
import CustomImage from "@components/CustomImage";

// data
import { EN_projects, } from "@Data/ProjectsData";

const variants = {
  onscreen: {
    scale: 1,
    transition: { type: "spring", bounce: 0.25 }
  },
  offscreen: {
    scale: 0.1,
    // transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function Projects() {
  const { currentTheme, isDark } = useSelector((state) => state.theme);
  const { currentLanguage, isEN } = useSelector(state => state.language);

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
          viewport={{ once: true, }}
        >

          {
            EN_projects.map((project, index) => (
              <div className='projectsContainer-projectWrap-card' key={index}>
                <div className='cardHeader'>
                  <CustomImage
                    src={project.img}
                    alt={`Logo`}
                    styles={`card-img`}
                    img2={project.img}
                    img3={project.img}
                  />
                </div>

                <div className='cardBody'>
                  <h4 className='cardTitle'>{project.title}</h4>
                  <p className='cardDescription'>{project.description}</p>
                </div>
              </div>
            ))
          }

        </motion.div>


      </div>

    </div>
  )
}

export default Projects
