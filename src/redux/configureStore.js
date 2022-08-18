import { legacy_createStore,combineReducers } from "redux"
import allDataReducer from "./reducers/allDataReducer"
import cardReducer from "./reducers/cardReducer"
import potsDataReducer from "./reducers/potsDataReducer"
import indoorDataReducer from "./reducers/indoorDataReducer"
import MusteriReducer from "./reducers/MusteriReducer"
import qulluqReducer from "./reducers/qulluqReducer"

const reducer =combineReducers({
    allDataReducer,
    cardReducer,
    potsDataReducer,
    indoorDataReducer,
    MusteriReducer,
    qulluqReducer,
})

function configureStore(){

    return legacy_createStore(reducer)
}
export default configureStore