import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {connect} from "react-redux"

import {ischild,changetitle} from '../store/action/NavBarAction'   //引入action
import CardList from '../components/CardList'
import "./App.less"


class App extends Component{
    constructor(){
        super()
        this.state ={
            selectedTab:'blueTab',
            hidden: false,
            fullScreen: true,
         };
    }

    render(){
        return(
            <div style={{position: 'fixed', height: '100%', width: '100%', bottom:0,paddingTop:"45px",zIndex:-1}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                badge={1}
                onPress={() => {
                  this.props.CHANGETITLE("首页")

                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
                data-seed="logId"
              >
             <CardList last="首页"/>
                {/* {this.renderContent('Life')} */}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="口碑"
                key="Koubei"
                badge={'new'}
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.props.CHANGETITLE("口碑")

                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
              >
               <CardList last="口碑"/>
                {/* {this.renderContent('Koubei')} */}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="朋友"
                key="Friend"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.props.CHANGETITLE("朋友")
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
              >
               <CardList last="朋友"/>
                {/* {this.renderContent('Friend')} */}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="我的"
                key="my"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.props.CHANGETITLE("我的")

                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
              >
              <CardList last="我的"/>
                {/* {this.renderContent('My')} */}
              </TabBar.Item>
            </TabBar>
          </div>
        )
    }
}

const mapStateToProps = (state) => {   //我想要挂载在自己的props上面的store中的state
    return {
       
    }
}
const mapDispatchToProps = (dispatch)=>{ //我想要挂载在自己的props上面的store中的dispatch
    return{
        ISCHILD:(flag)=>{
            dispatch(ischild({ischild:flag}))   //用于是否展示回退 子路由会出现
        },
        CHANGETITLE:(title)=>{
            dispatch(changetitle({title:title}))  //用于修改title
        }
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App)



export default App