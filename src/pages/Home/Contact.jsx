import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink,Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// components
import CustomImage from '@components/CustomImage';

function Contact() {
  const toggleTheme = useSelector(state => state.theme);
  const {currentTheme, isDark} = toggleTheme
  
  return (
    <div className={`sectionArea contact ${isDark?`isDark`:''}`}>

      {/* info */}
      <div className='contact-container'>
        <div className='contact-container-detail'>
          <h3 id='contact' className={`sectionTitle ${currentTheme}-color-second`}>// CONTACT</h3>
        </div>

        {/* detail */}
        <div className='contact-container-detail'>
          <div className='nameWrap'>
            <CustomImage 
              src={`logo/logo.png`}
              alt={`Logo`}
              styles={`nav-logo-img`}
              img2={`logo/logo@2x.png`}
              img3={`logo/logo@3x.png`}
            />
            <span className={`${currentTheme}-color-second`}>FU TING (FRED) LI</span>
          </div>
        </div>
      </div>
      
      <div className='copyRightContainer'>
        <p className={`${currentTheme}-color`}>Copyright © 2023 Fred LI | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default React.memo(Contact)
