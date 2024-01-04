import React,{ useState, useEffect,useCallback } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import {toggleLanguageHandler,getLanguageLocalStorage} from "@Reducer/language/language-action";

function LangButton() {
  const toggleTheme = useSelector(state => state.theme);
  const toggleLanguage = useSelector(state => state.language);
  const dispatch = useDispatch();

  // language
  useEffect(() => {
    const data = getLanguageLocalStorage()
    dispatch(toggleLanguageHandler(data))
  },[])

  const toggleSwitch = useCallback(() => {
    const data = {
      currentLanguage: toggleLanguage?.isEN ? 'EN' : 'ZH',
      isEN: !toggleLanguage.isEN
    }
    dispatch(toggleLanguageHandler(data));
  }, [toggleLanguage]);

  return (
    <div
      className={`langBtn`}
      onClick={toggleSwitch}
    >
      <p className={`${toggleTheme?.currentTheme}-color`}>{toggleLanguage?.isEN ? 'ZH':`EN`}</p>
    </div>
  );
}

export default React.memo(LangButton);