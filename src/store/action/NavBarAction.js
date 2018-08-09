export const ISCHILD = "ISCHILD"    //在reducer里面用到
export const CHANGETITLE = "CHANGETITLE"    //在reducer里面用到

export const ischild = (counterCaption)=>({    //在dispatch里面用到
    type:ISCHILD,
    counterCaption
})

export const changetitle = (counterCaption)=>({ //在dispatch里面用到
    type:CHANGETITLE,
    counterCaption
})