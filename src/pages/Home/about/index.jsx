import React from 'react'
import { useSelector } from 'react-redux'
import useScrollTo from '@customHook/useScrollTo'

const description = [
  `As a web developer, I utilize various design and coding languages to create exceptional user experiences.`,
  `I love engaging in coding discussions with professionals from diverse backgrounds, as it not only provides me with an opportunity for personal growth but also helps me gain valuable insights.`,
  `During my leisure time, I like working out and cooking Taiwanese cuisine. I also enjoy spending time outdoors with my friends and family.`,
]
function About() {
  const toggleTheme = useSelector(state => state.theme);
  const {currentTheme, isDark} = toggleTheme;

  const {targetRef} = useScrollTo();
  
  return (
    <div className={`sectionArea aboutContainer ${currentTheme}-bg-fourth`}>
      <h1 id="about" className={`${currentTheme}-color`} ref={targetRef}>
        // About
      </h1>
      <div className="aboutContainer-description">
        <div className="aboutContainer-description-content">
          <h2 className={`${currentTheme}-color`}>Hi, I’m Fu Ting (Fred). Nice to meet you.</h2>

          {description.map((item,index)=>(
            <p key={index} className={`${currentTheme}-color`}>{item}</p>
          ))}
        </div>
        {/* head portrait */}
        <div className="aboutContainer-description-content"></div>
      </div>
    </div>
  );
}

export default React.memo(About)
