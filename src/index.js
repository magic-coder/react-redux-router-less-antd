import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.js'
import 'antd-mobile/dist/antd-mobile.css';
import {createStore,combineReducers } from 'redux'
import {Provider} from 'react-redux'
import {actionDemo} from './store/action/actionDemo'
import renducerDemo from './store/reducer/renducerDemo'

const RootReducer = combineReducers(
    {demo:renducerDemo}
)

const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('app'))