import React, { Component } from 'react';
    //地址栏占位符传参体验 以及子路由展示
class Page2 extends Component{
    constructor(){
        super()
        this.state ={
            title:'Page2'
         };
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1><h2>{this.props.match.params.id}</h2>
                <h3>这种传参方式刷新依然保留，但是会暴露</h3>
            </div>
        )
    }
}

export default Page2