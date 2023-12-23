import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./theme/theme-slice";
import languageSlice from "./language/language-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    language: languageSlice.reducer,
  },
});

export default store;
