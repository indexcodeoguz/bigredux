// reducer state yönetimini yaptığımız yer


import * as actionTypes from "../action/actionTypes";
import initialState from "./initialState";
export default function cartReducer(state = initialState.cart,action) {

    switch (action.type) {
        case actionTypes.ADD_TO_CART:                  /// case action type ise add to cart ise
            
         var addedItem = state.find(c => c.product.id === action.payload.product.id); // eğer state içinde böyle bir ürün varsa
             if(addedItem){
                var newState = state.map(cartItem => {
                    if(cartItem.product.id === action.payload.product.id){
                         return Object.assign({}, cartItem, { quantity: addedItem.quantity + 1});      // 10035 13.50
                    }
                     return cartItem; 
             })
             return newState;
            }else {
             return [...state, { ...action.payload }]; // statein kopyasını al  action ile gelen payloadı ekle
            }
        default:
            return state;
    }
}
