import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import ThemeProvider from './context/themeContext/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);
reportWebVitals();
