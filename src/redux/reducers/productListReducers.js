import * as actionTypes from "../action/actionTypes";
import initialState from "./initialState";

export default function productListReducer(state=initialState.products, action) {
 switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
        return action.payload;// payload içindeki category değerini state  
    default:
        return state; // eğer action type'ı CHANGE_CATEGORY değilse mevcut state'i gösterir
 }
}