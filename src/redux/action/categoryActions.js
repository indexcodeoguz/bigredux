import * as actionTypes from "./actionTypes"; // actionTypes dosyasından actionTypes'ı alır
export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category }; // reducerde CHANGE_CATEGORY i görünce state de payloadı gösterilen değer olan category olarak verir
}



export function getCategoriesSuccess(categories){
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }; // reducerde GET_CATEGORIES_SUCCESS yi görünce state de payloadı gösterilen değer olan categories olarak verir
}

export function getCategories() {
  return function (dispatch) {
    debugger;
    let url = "http://localhost:4000/categories";
    return fetch(url).then((response) => response.json())
    .then(result => dispatch(getCategoriesSuccess(result)));
  };
}
