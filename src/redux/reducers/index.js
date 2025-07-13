import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducers";   
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducers";
import cartReducer from "./cartReducer"; 

const rootReducers = combineReducers({
changeCategoryReducer,
categoryListReducer,
productListReducer,
cartReducer
})


export default rootReducers;