import React, { useEffect, useState, useCallback } from 'react'
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// components
import CustomImage from "@components/CustomImage";
import CustomButton from "@components/CustomButton";

// data
import { projectDetail } from "@Data/ProjectsData";

// custom hooks
import useHttp from "@hooks/use-http";

function ProjectDetail() {
  // const location = useLocation();
  const navigate = useNavigate();
  let { projectId } = useParams();
  const { currentTheme, isDark } = useSelector((state) => state.theme);
  const { currentLanguage, isEN } = useSelector((state) => state.language);

  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const selectedProject = projectDetail.find(project => project.id === projectId);
    const findIndex = projectDetail.findIndex(project => project.id === projectId);

    goToProjectDetail(selectedProject.id, findIndex)
  }, [])

  const goPrevious = () => {
    if (currentIndex !== 0) {
      const prevIndex = currentIndex - 1;
      const foundId = projectDetail[prevIndex].id

      goToProjectDetail(foundId, prevIndex)
    }
  }

  const goNext = () => {
    if (currentIndex !== projectDetail.length - 1) {
      const nextIndex = currentIndex + 1;
      const foundId = projectDetail[nextIndex].id

      goToProjectDetail(foundId, nextIndex)
    }
  }

  const goToProjectDetail = useCallback((foundId, previousNextIndex) => {
    const selectedProject = projectDetail.find(project => project.id === foundId);
    setProject(selectedProject)
    setCurrentIndex(previousNextIndex)
    window.scrollTo(0, 0);
  }, [projectDetail, setProject, setCurrentIndex])

  // UI
  if (!project) return <p>Loading...</p>
  return (
    <div className={`sectionArea projectDetail ${currentTheme}-bg-second`}>

      {/* header */}
      <div className={`projectDetail-headerContainer ${currentTheme}-bg-fourth`}>

        <div className={`projectDetail-headerContainer-subWrap ${project?.type == 'app' ? 'app' : ''}`}>
          <h4 className={`${isDark ? `dark-color` : `light-purple-color`} subTitle`}>{project?.subTitle}</h4>
          <h1 className={`${currentTheme}-color-second title`}>{project?.title}</h1>
          <p className={`${currentTheme}-color description`}>{project[`${currentLanguage}_description`]}</p>

          <hr className={`${currentTheme}-bg-second`} />

          <div>
            <h4 className={`${currentTheme}-color technologiesTitle`}>Technologies</h4>
            <div className={`technologiesContainer`}>
              {project?.technologies.map((tech, index) => (
                <p key={index} className={`${currentTheme}-color technology`}>{tech}{index == project.length - 1 ? '' : ', '}</p>
              ))}
            </div>

            <div>

              {
                project?.ProjectLink.length > 2 ? (
                  <h4
                    className={`${currentTheme}-color openProjectLink`}
                  >{project?.type == 'web' ? `Open Project` : `Download App`}</h4>
                ) : null
              }
              {
                Array.isArray(project?.ProjectLink) && project?.ProjectLink.length ? (
                  <div>
                    {
                      project?.ProjectLink.map((item, index) => (
                        <Link
                          key={index}
                          to={`${item?.link}`}
                          target={`_blank`}
                          className={`${currentTheme}-color openProjectLink`}
                          style={{ color: isDark ? project?.secondColor : (!isDark && project?.type == 'web' ? project?.secondColor : project?.mainColor) }}
                        >
                          {item.name} {index == project?.ProjectLink.length - 1 ? '' : ', '}
                        </Link>
                      ))
                    }
                  </div>
                ) : null
              }
            </div>

          </div>
        </div>

        <div
          className={`projectDetail-headerContainer-subWrap ${project?.type == 'app' ? 'app' : ''}`}
          style={{ backgroundColor: project?.type == 'web' ? project?.mainColor : 'transparent' }}
        >
          <CustomImage
            src={project?.banner}
            alt={`Banner`}
            styles={`banner ${project?.type == 'app' ? 'app' : ''}`}
            img2={project?.banner}
            img3={project?.banner}
          />
        </div>
      </div>


      {
        project?.type == 'web' ? (
          <div className="section-container mainSection">
            <>
              <h1 className={`${currentTheme}-color-second mainSection-title`}>{project?.section['main']?.title}</h1>

              <CustomImage
                src={project?.section['main']?.image}
                alt={`Main`}
                styles={`mainImg`}
                img2={project?.section['main']?.image}
                img3={project?.section['main']?.image}
              />
            </>

            <hr className={`${currentTheme}-bg-second`} />

            <>
              <h1 className={`${currentTheme}-color-second mainSection-title`}>{project?.section['second']?.title}</h1>

              <div className={`secondContainer`}>
                <div>
                  <CustomImage
                    src={project?.section['second']?.image}
                    alt={`second`}
                    styles={`mainImg`}
                    img2={project?.section['second']?.image}
                    img3={project?.section['second']?.image}
                  />
                </div>

                <div>
                  {project?.section['second']?.description.map((desc, index) => (
                    <div key={index} className='secondSectionSubWrap'>
                      <h4
                        className={`${currentTheme}-color-second secondSection-title`}
                        style={{ color: isDark ? project?.secondColor : project?.mainColor }}
                      >{desc.title}</h4>
                      <p className={`${currentTheme}-color description`}>{desc[`${currentLanguage}_content`]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>

          </div>
        ) : project?.type == 'app' ? (
          <>
            <div className={`mobileWrap`}>
              <div className={`mobileWrap-subWrap`}>
                <CustomImage
                  src={project?.section['main']?.image}
                  alt={`main`}
                  styles={`mobileWrapImg`}
                  img2={project?.section['main']?.image}
                  img3={project?.section['main']?.image}
                />
              </div>

              <div className={`mobileWrap-subWrap`}>
                {project?.section['main']?.description.map((desc, index) => (
                  <div key={index} className='secondSectionSubWrap'>
                    <h4
                      className={`${currentTheme}-color-second mobileWrap-subWrap-title`}
                      style={{ color: isDark ? project?.secondColor : project?.mainColor }}
                    >{desc.title}</h4>
                    <p className={`${currentTheme}-color description`}>{desc[`${currentLanguage}_content`]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mobileWrap ${currentTheme}-bg-fourth`}>
              <div className={`mobileWrap-subWrap`}>
                <CustomImage
                  src={project?.section['second']?.image}
                  alt={`second`}
                  styles={`mobileWrapImg`}
                  img2={project?.section['second']?.image}
                  img3={project?.section['second']?.image}
                />
              </div>

              <div className={`mobileWrap-subWrap order`}>
                {project?.section['second']?.description.map((desc, index) => (
                  <div key={index} className='secondSectionSubWrap'>
                    <h4
                      className={`${currentTheme}-color-second mobileWrap-subWrap-title`}
                      style={{ color: isDark ? project?.secondColor : project?.mainColor }}
                    >{desc.title}</h4>
                    <p className={`${currentTheme}-color description`}>{desc[`${currentLanguage}_content`]}</p>
                  </div>
                ))}
              </div>
            </div>
          </>

        ) : (
          <p>Loading...</p>
        )
      }


      <div className={`switchProjects`}>
        {currentIndex !== 0 ? (
          <CustomButton
            className='switchBtn previous light-bg-linear '
            onClick={goPrevious}
          >
            <span className={`btnText`}>Previous</span>
          </CustomButton>
        ) : null}

        {currentIndex == projectDetail.length - 1 ? null : (
          <CustomButton
            className='switchBtn Next light-bg-linear '
            onClick={goNext}
          >
            <span className={`btnText`}>Next</span>
          </CustomButton>
        )}
      </div>

    </div >

  )
}

export default ProjectDetail
