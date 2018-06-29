import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Card from '../components/card'
import ShowNum from '../dumbComponents/ShowNum'
import ADDandSUB from '../dumbComponents/ADDandSUB'
import "./App.less"
class App extends Component{
    render(){
        return(
            <div className="test">
            <h1>9527 22React1</h1>
            <Card />
            <ShowNum />
            <ADDandSUB />
            </div>
        )
    }
}
export default App