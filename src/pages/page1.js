import React, { Component } from 'react';
import QmAjax from '../../tools/ajax';

class List extends Component{
    constructor(){
        super()
        this.state ={
            title:'Page1'
         };
    }

    componentDidMount(){
        QmAjax.POST('/test',{a:'123'}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        QmAjax.GET('/test',{a:'123'}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default List