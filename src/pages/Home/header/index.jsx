import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { motion,AnimatePresence } from "framer-motion";
import { useSelector, } from "react-redux";

// components
import SvgBg from './components/SvgBg'
import MyName from '@components/myName'
import CustomImage from '@components/CustomImage'
import CustomButton from '@components/CustomButton'

// MUI
import {KeyboardDoubleArrowDown} from '@mui/icons-material';
// data
import { contactData } from "@Data/contactData";
import { workTitle } from "@Data/workExperiences";

function Header() {
  const navigate = useNavigate()
  const { currentTheme,isDark, } = useSelector(state => state.theme);
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
        src={`icon/SocialMedia/${currentTheme}/${item.icon}/${item.icon}.png`}
        alt={`Social Media`}
        styles={`socialMedia-img`}
        img2={`icon/SocialMedia/${currentTheme}/${item.icon}/${item.icon}@2x.png`}
        img3={`icon/SocialMedia/${currentTheme}/${item.icon}/${item.icon}@3x.png`}
      />
    </Link>
  ))

  const navigateHandler = ()=>{
    navigate('/#about')
  }

  return (
    <div className="sectionArea headerContainer">
      <SvgBg />

      <dir className={`nameArea`}>
        <MyName />
        <p className={`nameArea-description ${currentTheme}-color`}>
          {workTitle[`${currentLanguage}-title`]}
        </p>

        <div className="nameArea-Contacts">
          {renderSocialMedias}
        </div>
      </dir>

      <CustomButton
        animate={{ y: [0, 10, 0], transition: { duration: 2, repeat: Infinity } }}
        className={`scrollDown ${isDark?`isDark`:``}`}
        onClick={navigateHandler}
      >
        <KeyboardDoubleArrowDown 
          className={`scrollDown-icon 
          ${currentTheme}-color-second`} 
        />
      </CustomButton>
    </div>
  );
}

export default React.memo(Header)
