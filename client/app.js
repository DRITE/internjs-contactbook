import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
import { App } from './react_components/App.jsx';

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
    document.getElementById('root')
);