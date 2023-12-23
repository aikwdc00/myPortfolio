import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { currentLanguage: 'EN'},
  reducers: {
    toggleLanguage(state,action) {
      state.currentLanguage = action.payload?.language;
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice;
