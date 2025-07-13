import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/action/productActions";
import { Table } from "reactstrap";
import * as cartActionss from "../../redux/action/cartActions";
import alertify from "alertifyjs";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) =>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName  + "added to cart")
  }
  render() {
    return (
      <div>
        
          <Badge color="warning">Product</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
                <th>Units in Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Button color="success" onClick={()=>this.addToCart(product)}>

                      Sepete Ekle
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  // aksiyonu proplara bağla
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch), // aksiyonları proplara bağla
      addToCart : bindActionCreators(cartActionss.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
