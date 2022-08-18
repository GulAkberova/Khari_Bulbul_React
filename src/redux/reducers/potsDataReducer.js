let data1=[]

function potsDataReducer(state=data1,action){
    switch(action.type){
        case "All_Pots_Data":
            return state=action.payload

        default:
            return state
    }

}
export default potsDataReducer