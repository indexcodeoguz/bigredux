import { type } from "@testing-library/user-event/dist/type";
import * as actionTypes from "./actionTypes"; // tüm action tipleri importu



export function addToCart(cartItem){
    return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}

export function removeFromCart(product) {
    return { type: actionTypes.REMOVE_FROM_cART, payload: product };
}