let card=[]
  function cardReducer(state=card,action){
      switch (action.type) {
        case"Add_CARD":
        return state=[...state,action.payload];
        case"edit_quantity":
        return state=[...action.payload];
        case "Delete_Card":
          return state=state.filter(index=>index.id !==action.payload)
          default:
            return state
      }
  }
  export default cardReducer