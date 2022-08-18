let data6=[]
function qulluqReducer(state=data6,action){
    switch(action.type){
        case "All_Data_Qulluq":
            return state=action.payload
        default:
            return state
    }
}
export default qulluqReducer