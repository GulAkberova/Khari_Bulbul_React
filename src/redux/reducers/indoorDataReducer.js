let data2=[]

function indoorDataReducer (state=data2,action){
    switch(action.type){
        case "All_Indoor_Data":
            return state=action.payload

        default:
            return state
    }

}
export default indoorDataReducer