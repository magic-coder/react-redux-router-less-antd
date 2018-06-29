const reducerDemo = (state,action)=>{
    if(!state){
        return{   //这里写你需要生成的state
            num:0
        }
    }
    // 这里其实是distapch 用于action触发 可传参 这里仅介绍了调用 传参请看redux官网介绍
    switch(action.type){
        case "ADD":
        return{...state,num:state.num+1};
        case "SUB":
        return{...state,num:state.num-1};
    }
}

export default reducerDemo