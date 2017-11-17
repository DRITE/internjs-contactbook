import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
// import {App} from './react_components/App.jsx';
import {createStore, applyMiddleware} from 'redux';
import {AppContainer} from "./add-redux/containers/AppContainer";
import {fetchContactsReducer} from "./add-redux/reducers/contacts-reducer";
import Provider from "react-redux/es/components/Provider";

export let store = createStore(
    fetchContactsReducer,
    applyMiddleware(
        thunkMiddleware, // позволяет нам отправлять функции
    )
);

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={enUS}>
            {/*<AppContainer store={store}>*/}
            {/*<App/>*/}
            {/*</AppContainer>AppContainer>*/}
            <AppContainer/>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);