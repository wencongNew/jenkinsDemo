import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LocaleProvider } from 'antd';
import * as serviceWorker from './serviceWorker';
import en from 'antd/lib/locale-provider/en_US';
// addLocaleData([...enUS, ...zhCN]);

// const langMap = {
//     'zh': zhCN,
//     'en': enUS
// };
ReactDOM.render(
    <LocaleProvider locale={"en_US"} message={en}>
            <App />
    </LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
