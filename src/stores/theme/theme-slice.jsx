import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { currentTheme: 'dark',nextTheme:'light', isDark:true},
  reducers: {
    toggleTheme(state,action) {
      return {
        ...state,
        currentTheme: action.payload?.theme?.currentTheme,
        nextTheme: action.payload?.theme?.nextTheme,
        isDark: !state.isDark
      }
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
