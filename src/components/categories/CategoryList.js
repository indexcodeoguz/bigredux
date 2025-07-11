import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/action/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from "reactstrap"; 
import * as productActions from "../../redux/action/productActions";  
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id); // seçilen kategoriye göre ürünleri getir
  };
  render() {
    return (
      <div>
        <h3><Badge color="warning">Categories</Badge> </h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.categoryId === this.props.currentCategory?.categoryId}
              onClick={() => this.selectCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer, // storedeki changeCategoryReducere  map et
    categories: state.categoryListReducer,
  };
} // bu componentin proplarını bir stateye bağla

function mapDispatchToProps(dispatch) {
  // aksiyonu proplara bağla
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ), // aksiyonları proplara bağla
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
         getProducts: bindActionCreators(productActions.getProducts, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
