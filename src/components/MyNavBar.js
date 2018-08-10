import React,{Component} from 'react'
import "./MyNavBar.less"
import { NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux';

//  普通组件以及less示例

// 头部的tab 数据在redux里面 这样方便任何页面都可以修改本组件的title  左侧有个返回按钮 通过redux里面的 ischild控制
class MyNavBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <NavBar
                mode="dark"
                leftContent={
                    this.props.ischild?<Icon key="1" type="left" />:""
                }
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {   //我想要挂载在自己的props上面的store中的state
    return {
        ischild: state.navbar.ischild,
        title:state.navbar.title,
    }
}
const mapDispatchToProps = (dispatch)=>{ //我想要挂载在自己的props上面的store中的dispatch
    return{

    }
}

MyNavBar = connect(mapStateToProps,mapDispatchToProps)(MyNavBar) // 一个高阶函数将ShowNum封装成为一个连接了store的组件


export default MyNavBar