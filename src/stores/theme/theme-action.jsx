import {themeActions} from './theme-slice'


export const toggleThemeHandler = (val) =>{
  return async (dispatch)=>{
    dispatch(themeActions.toggleTheme({
      theme: val,
    }))
    
    saveThemeLocalStorage(val)
  }
}

export const saveThemeLocalStorage = (val)=>{
  localStorage.setItem('theme', JSON.stringify(val))
}

export const getThemeLocalStorage = ()=>{
  const theme = localStorage.getItem('theme')
  return JSON.parse(theme)
}