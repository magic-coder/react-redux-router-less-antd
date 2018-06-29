import React, { Component } from 'react';

class List extends Component{
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

export default List