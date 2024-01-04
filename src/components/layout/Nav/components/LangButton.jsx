import React,{ useState, useEffect,useCallback } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import {toggleLanguageHandler,getLanguageLocalStorage} from "@Reducer/language/language-action";

function LangButton() {
  const toggleTheme = useSelector(state => state.theme);
  const {currentLanguage, isEN} = useSelector((state) => state.language);
  const dispatch = useDispatch();

  // language
  useEffect(() => {
    const data = getLanguageLocalStorage()
    if(data){
      toggleLangHandler(data)
    }else{
      toggleSwitch()
    }
  },[])

  const toggleSwitch = useCallback(() => {
    const data = {
      currentLanguage: isEN ? 'ZH' : 'EN',
      isEN: !isEN
    }
  
    toggleLangHandler(data)
  }, [currentLanguage]);

  const toggleLangHandler = useCallback((data) => {
    dispatch(toggleLanguageHandler(data));
  }, [toggleLanguageHandler]);

  return (
    <div
      className={`langBtn`}
      onClick={toggleSwitch}
    >
      <p className={`${toggleTheme?.currentTheme}-color`}>{isEN ? 'ZH':`EN`}</p>
    </div>
  );
}

export default React.memo(LangButton);