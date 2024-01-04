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

export default function App() {
  const toggleTheme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  // theme
  useEffect(() => {
    const theme = getThemeLocalStorage()
    dispatch(toggleThemeHandler(theme))
  },[])

  // useEffect(() => {
  //   console.log('toggleTheme',toggleTheme)
  // }, [toggleTheme]);

  const toggleSwitch = useCallback(() => {
    const data = {
      currentTheme: toggleTheme?.isDark ? 'light' : 'dark',
      nextTheme: toggleTheme?.isDark ? 'dark' : 'light',
      isDark: !toggleTheme.isDark
    }
    dispatch(toggleThemeHandler(data));
  }, [toggleTheme]);

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

