import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink,Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// components
import CustomImage from '@components/CustomImage';

// data
import {contactData} from '@Data/contactData'
import { workTitle, myName} from "@Data/workExperiences";

function Contact() {
  const {currentTheme, isDark} = useSelector(state => state.theme);
  const {currentLanguage, isEN} = useSelector(state => state.language);
  
  const renderSocialMedias = contactData.map((item, index) => (
    <Link
      to={item.link}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      className={`nameArea-Contacts-Link`}
    >
      <CustomImage
        src={`icon/SocialMedia/dark/${item.icon}/${item.icon}.png`}
        alt={`Social Media`}
        styles={`socialMedia-img`}
        img2={`icon/SocialMedia/dark/${item.icon}/${item.icon}@2x.png`}
        img3={`icon/SocialMedia/dark/${item.icon}/${item.icon}@3x.png`}
      />
    </Link>
  ))

  return (
    <div className={`sectionArea contact ${currentTheme}-bg-fourth`}>
      <div className="section-container">

        {/* info */}
        <div className='contact-container'>
          <div className='contact-container-detail'>
            <h3 id='contact' className={`sectionTitle ${currentTheme}-color-second`}>// {isEN ?`CONTACT`:`聯繫我`}</h3>
          </div>

          {/* detail */}
          <div className='contact-container-detail'>
            <div className='nameWrap'>
              <CustomImage 
                src={`logo/${currentTheme}/logo.png`}
                alt={`Logo`}
                styles={`nav-logo-img`}
                img2={`logo/${currentTheme}/logo@2x.png`}
                img3={`logo/${currentTheme}/logo@3x.png`}
              />
              {/* my name */}
              <h4 className={`${currentTheme}-color-second`}>{myName[`${currentLanguage}-title`]}</h4>
            </div>
            <p className={`positionTitle ${currentTheme}-color`}>{workTitle[`${currentLanguage}-title`]}</p>

            {/* contact */}
            <div className='nameArea-Contacts'>
              {renderSocialMedias}
            </div>

            <p className={`contactMe ${currentTheme}-color`}>
              {
                isEN 
                ?`If you are interested in my work experience, please get in touch with me`
                :`如果您對我的工作經驗感興趣，請與我聯繫`
              }
            </p>
          </div>
        </div>
        
        <div className={`copyRightContainer ${isDark? null: `isLight`}`}>
          <p className={`${currentTheme}-color`}>Copyright © 2023 FU TING (Fred) LI | All Rights Reserved</p>
        </div>


      </div>

    </div>
  )
}

export default React.memo(Contact)
