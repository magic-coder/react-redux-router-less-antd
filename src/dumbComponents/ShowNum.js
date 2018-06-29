import React, { Component } from 'react';
import {connect} from 'react-redux';
class ShowNum extends Component{
    render(){
        return(
            <h1>这是 store 组件 {this.props.num}</h1>
        )
    }
}

const mapStateToProps = (state) => {   //我想要挂载在自己的props上面的store中的state
    return {
      num: state.demo.num
    }
}
const mapDispatchToProps = (dispatch)=>{ //我想要挂载在自己的props上面的store中的dispatch
    return{}
}

ShowNum = connect(mapStateToProps,mapDispatchToProps)(ShowNum) // 一个高阶函数将ShowNum封装成为一个连接了store的组件
 
export default ShowNum