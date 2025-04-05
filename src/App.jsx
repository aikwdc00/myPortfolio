import { useState, useEffect } from 'react';

// redux
import { Provider } from 'react-redux';
import store from '@Reducer/index';

// components
import Root from './RootRouter.jsx';

// styles
import '@Public/styles/main.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import '../src/utilities/service.jsx';

function App() {
    useEffect(() => {
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        async function firebaseConfig() {
            const firebaseConfig = {
                apiKey: FIREBASE_API_KEY,
                authDomain: AUTH_DOMAIN,
                databaseURL: DATABASEURL,
                projectId: PROJECTID,
                storageBucket: STORAGEBUCKET,
                messagingSenderId: MESSAGINGSENDERID,
                appId: APPID,
                measurementId: MEASUREMENTID,
            };

            // // Initialize Firebase
            const app = await initializeApp(firebaseConfig);
            const analytics = await getAnalytics(app);
        }

        firebaseConfig();
    }, []);

    return (
        <Provider store={store}>
            <Root />
        </Provider>
    );
}

export default App;
