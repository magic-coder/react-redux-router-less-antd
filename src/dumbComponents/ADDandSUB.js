import React, { Component } from 'react';
import {connect} from 'react-redux';
import ACTION
     from '../store/action/actionDemo'
import { Button } from 'antd-mobile';
    connect
class ADDandSUB extends Component{
    render(){
        return(
            <div>
            <Button onClick = {this.props.ADD.bind(this)}>store dispatch触发 +</Button>
            <Button onClick = {this.props.SUB.bind(this)}>store dispatch触发 -</Button>
            </div>
    )
    }
}
console.log(ACTION)
const mapStateToProps = (state) => {
    return {
      
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        ADD:()=>{
            dispatch(ACTION.ACTION_ADD)
        },
        SUB:()=>{
            dispatch(ACTION.ACTION_SUB)
        },
    }
}

ADDandSUB = connect(mapStateToProps,mapDispatchToProps)(ADDandSUB)

export default ADDandSUB