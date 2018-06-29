import React, { Component } from 'react';
import {connect} from 'react-redux';
class ShowNum extends Component{
    render(){
        return(
            <h1>这是 store 组件 {this.props.num}</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      num: state.demo.num
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{}
}

ShowNum = connect(mapStateToProps,mapDispatchToProps)(ShowNum)

export default ShowNum