const renducerDemo = (state,action)=>{
    if(!state){
        return{
            num:0
        }
    }
    switch(action.type){
        case "ADD":
        return{...state,num:state.num+1};
        case "SUB":
        return{...state,num:state.num-1};
    }
}

export default renducerDemo