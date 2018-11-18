import React, { Component } from "react";
import { connect } from "react-redux";

import { onBrokenImageUrl } from '../../utils/image-utils';

import { getItems } from "../../selectors/shoppingSelector";

import { onSelectedImageChange } from "../../actions/shoppingAction";

import { handleProductAddToCartClick } from '../../actions/cartAction';

import ProductList from "../../components/ProductList";

class ProductListContainer extends Component {

  render() {
    const {
      products,
      onSelectedImageChange,
      handleProductAddToCartClick
    } = this.props;

    return (
      <ProductList
        products={products}
        onSelectedImageChange={onSelectedImageChange}
        onBrokenImageUrl={onBrokenImageUrl}
        handleProductAddToCartClick={handleProductAddToCartClick}
      />
    );
  }
}

const mapStateToProps = ({ shoppingState }) => ({
  products: getItems(shoppingState)
});

const mapDispatchToProps = dispatch => ({
  onSelectedImageChange: (id, url) => dispatch(onSelectedImageChange(id, url)),
  handleProductAddToCartClick: product =>
    dispatch(handleProductAddToCartClick(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
