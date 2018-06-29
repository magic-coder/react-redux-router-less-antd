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
import reducerDemo from './store/reducer/reducerDemo'


const List =({match})=>(
    <div>
        {/* 这里是子路由模块，react-router4以后只能把子路由写在组件内，这是个详细写法示例 */}
    <Route path={`${match.url}/page1`} component={page1}/>
    {/* 地址栏传参 */}
    <Route path={`${match.url}/page2/:id`} component={page2}/>
    <Route path={`${match.url}/page3/`} component={page3}/>
    {/* 运用 {match.url}获取到当前的路由地址，增加匹配子路由 */}
    <Link to={`${match.url}/page1`}>PAGE1</Link>    
    {/* 地址栏传参 参数保存在props.match.params中 可以到page2组件体验优缺点*/}
    <Link to={`${match.url}/page2/这是地址栏传下来的id`}>PAGE2</Link>
    {/* Link组件直接传参，参数会被保存在 props的location中可以直接获取 可以到page3组件体验优缺点 */}
    <Link to={{pathname:`${match.url}/page3`, query:{text:'这是query'}, state:{data:'这是state的data'}  }}>PAGE3</Link>
    </div>

)

// 我们利用combineReducers 把多个 reducer进行合并 内部传入{key:reducer} 就可以把reducer中的state分开包装到store中 例子中的state被包装到了 demo下 可以通过 state.demo.data 调用到
const RootReducer = combineReducers(
    {demo:reducerDemo}
)

// createStore 来生成我们redux需要的store
const store = createStore(RootReducer)

ReactDOM.render(
   // Provider 组件是react-redux 中的重要组件，将生成的store通过props方式获取到store并通过上下文传递到子组件中，它内部包含高阶函数（组件）concent用于生成一个组件，并且把需要是state和dispatch挂载到子组件的props上可以连接和操纵store。
   // Provider
    <Provider store={store}>  
    {/* 此处注意Router 的引入方式 */}
        <Router>
            <div>
                {/* 只能写第一层路由，子路由需要写在组件内 */}
                <Route path="/" exact component={App} />
                <Route path="/list" component={List} />
            </div>
        </Router>
    </Provider>
    ,
    document.getElementById('app'))