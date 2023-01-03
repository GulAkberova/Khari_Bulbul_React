let data=[]
function allDataReducer(state=data,action){
    switch (action.type) {
        case "All_DATA":
            return state=action.payload;
 

     
      
    
        default:
          return state;
    }

}
export default allDataReducer