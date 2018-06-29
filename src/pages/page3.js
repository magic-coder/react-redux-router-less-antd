import React, { Component } from 'react';
//  Link传参方式体验 以及子路由展示
class Page3 extends Component{
    constructor(){
        super()
        this.state ={
            title:'Page3'
         };
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.props.location.query&&this.props.location.query.text}</h2>
                <h2>{this.props.location.state&&this.props.location.state.data}</h2>
                <h3>注意这种传参方式刷新会消失</h3>
            </div>
        )
    }
}

export default Page3