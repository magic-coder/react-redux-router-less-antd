import React,{Component} from 'react'
import "./card.less"
//  普通组件以及less示例
export default class Card extends Component{
    render(){
        return(
            <div className="card">
                我是组件 可以复用那种
            </div>
        )
    }
}