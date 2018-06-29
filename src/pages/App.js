import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Card from '../components/card'
import ShowNum from '../dumbComponents/ShowNum'
import ADDandSUB from '../dumbComponents/ADDandSUB'
import {Link} from 'react-router-dom'
import "./App.less"
class App extends Component{
    constructor(){
        super()
        this.state ={
            title:'react-redux-router-less-antd'
         };
    }
    render(){
        return(
            <div className="test">
            <h1>{this.state.title}</h1>
            <Card />
            <ShowNum />
            <ADDandSUB />
            <Link to={`/list`}>路由到list</Link>
            </div>
        )
    }
}
export default App