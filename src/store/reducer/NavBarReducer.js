import {ISCHILD,CHANGETITLE} from '../action/NavBarAction'

const navbar = (state,action)=>{
    if(!state){
        return{   //这里写你需要生成的state
            ischild:false,
            title:"首页"
        }
    }
    // 这里其实是distapch 用于action触发 可传参 这里仅介绍了调用 传参请看redux官网介绍
    let {counterCaption} = action
    switch(action.type){
        case ISCHILD:
        return{...state,ischild:counterCaption.ischild};
        case CHANGETITLE:
        return{...state,title:counterCaption.title}
        default:
        return{...state};
    }
}

export default navbar