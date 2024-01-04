import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { currentLanguage: 'EN', isEN: true,},
  reducers: {
    toggleLanguage(state,action) {
      return {
        ...state,
        currentLanguage: action.payload.currentLanguage,
        isEN: action.payload.isEN,
      }
      
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;
