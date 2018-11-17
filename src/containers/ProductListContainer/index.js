import React, { Component } from "react";
import { connect } from "react-redux";

import { getItems } from "../../selectors/shoppingSelector";

import { onSelectedImageChange } from "../../actions/shoppingAction";

import ProductList from "../../components/ProductList";

class ProductListContainer extends Component {
  onBrokenImageUrl = event => {
    event.target.src = "https://via.placeholder.com/150";
  };

  render() {
    const { products, onSelectedImageChange } = this.props;

    return (
      <ProductList
        products={products}
        onSelectedImageChange={onSelectedImageChange}
        onBrokenImageUrl={this.onBrokenImageUrl}
      />
    );
  }
}

const mapStateToProps = ({ shoppingState }) => ({
  products: getItems(shoppingState)
});

const mapDispatchToProps = dispatch => ({
  onSelectedImageChange: (id, url) => dispatch(onSelectedImageChange(id, url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
