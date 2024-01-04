import React,{ useState, useEffect,useCallback } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import {getThemeLocalStorage,toggleThemeHandler} from "@Reducer/theme/theme-action";

import CustomImage from '@components/CustomImage';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

function ThemeButton() {
  const toggleTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  // theme
  useEffect(() => {
    const data = getThemeLocalStorage()
    if(data){
      toggleModeHandler(data)
    }else{
      toggleSwitch()
    }
  },[])

  const toggleSwitch = useCallback(() => {
    const data = {
      currentTheme: toggleTheme?.isDark ? 'light' : 'dark',
      nextTheme: toggleTheme?.isDark ? 'dark' : 'light',
      isDark: !toggleTheme.isDark
    }

    toggleModeHandler(data)
  }, [toggleTheme]);

  const toggleModeHandler = useCallback((data) => {
    dispatch(toggleThemeHandler(data));
  }, [toggleThemeHandler]);

  return (
    <div
      className={`switch ${toggleTheme?.nextTheme}`}
      data-is-on={toggleTheme?.isDark}
      onClick={toggleSwitch}
    >
      
      <motion.div className="handle" layout transition={spring}>
        {toggleTheme.isDark ? (
          <CustomImage 
            src={`icon/sun.png`}
            alt={`Sun`}
            styles={`toggleThemeMode`}
            img2={`icon/sun.png`}
            img3={`icon/sun.png`}
          />
        ) : (
          <CustomImage 
            src={`icon/moon.png`}
            alt={`Moon`}
            styles={`toggleThemeMode moon`}
            img2={`icon/moon.png`}
            img3={`icon/moon.png`}
          />
        )}
      </motion.div>
    </div>
  );
}

export default React.memo(ThemeButton);

