let data5=[]
function MusteriReducer(state=data5,action){
    switch(action.type){
        case "All_Data_Musteri":
            return state=action.payload
        default:
            return state
    }
}
export default MusteriReducer