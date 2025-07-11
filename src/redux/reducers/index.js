import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducers";   
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducers";



const rootReducers = combineReducers({
changeCategoryReducer,
categoryListReducer,
productListReducer
})


export default rootReducers;