import React, { Component } from 'react';
import {connect} from 'react-redux';
import ACTION from '../store/action/actionDemo'
import { Button } from 'antd-mobile';
// 这是一个 DUMB组件 他的主要作用是用于触发 dispatch 改变state
class ADDandSUB extends Component{
    render(){
        return(
            <div>
                {/* 这里的Button 来自 Antd */}
            <Button onClick = {this.props.ADD.bind(this)}>store dispatch触发 +</Button>   
            <Button onClick = {this.props.SUB.bind(this)}>store dispatch触发 -</Button>
            </div>
    )
    }
}

const mapStateToProps = (state) => {   //我想要从store中得到的state
    return {
      
    }
}
const mapDispatchToProps =(dispatch)=>{  //我想要传入action调用的dispatch  return出去的方法就可以直接适用props调用
    return{
        ADD:()=>{
            dispatch(ACTION.ACTION_ADD)
        },
        SUB:()=>{
            dispatch(ACTION.ACTION_SUB)
        },
    }
}

ADDandSUB = connect(mapStateToProps,mapDispatchToProps)(ADDandSUB)  // 一个高阶函数将ADDandSUB封装成为一个连接了store的组件

export default ADDandSUB