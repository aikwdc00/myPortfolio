import {themeActions} from './theme-slice'


export const toggleThemeHandler = (val) =>{
  return async (dispatch)=>{
    dispatch(themeActions.toggleTheme({
      theme: val,
    }))
  }
}