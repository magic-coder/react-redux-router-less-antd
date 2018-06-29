import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.js'
import page1 from './pages/page1.js'
import page2 from './pages/page2.js'
import page3 from './pages/page3.js'
import 'antd-mobile/dist/antd-mobile.css';
import {createStore,combineReducers } from 'redux'
import {Provider} from 'react-redux'
import { HashRouter as Router,Route,Link} from 'react-router-dom'
import {actionDemo} from './store/action/actionDemo'
import renducerDemo from './store/reducer/renducerDemo'


const List =({match})=>(
    <div>
    <Route path={`${match.url}/page1`} component={page1}/>
    <Route path={`${match.url}/page2/:id`} component={page2}/>
    <Route path={`${match.url}/page3/`} component={page3}/>
    <Link to={`${match.url}/page1`}>PAGE1</Link>
    <Link to={`${match.url}/page2/这是地址栏传下来的id`}>PAGE2</Link>
    <Link to={{pathname:`${match.url}/page3`, query:{text:'这是query'}, state:{data:'这是state的data'}  }}>PAGE3</Link>
    </div>

)

const RootReducer = combineReducers(
    {demo:renducerDemo}
)

const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={App} />
                <Route path="/list" component={List} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('app'))