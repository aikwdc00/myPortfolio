import { languageActions } from './language-slice';

export const toggleLanguageHandler = (val) => {
    return async (dispatch) => {
        dispatch(
            languageActions.toggleLanguage({
                ...val,
            })
        );

        saveLanguageLocalStorage(val);
    };
};

export const saveLanguageLocalStorage = (val) => {
    localStorage.setItem('Language', JSON.stringify(val));
};

export const getLanguageLocalStorage = () => {
    const data = localStorage.getItem('Language');
    return JSON.parse(data);
};
