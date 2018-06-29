import React, { Component } from 'react';
import QmAjax from '../../tools/ajax';
// 子路由展示 以及ajax方法演示
class Page1 extends Component{
    constructor(){
        super()
        this.state ={
            title:'Page1'
         };
    }

    componentDidMount(){
        // ajax 方法演示
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

export default Page1