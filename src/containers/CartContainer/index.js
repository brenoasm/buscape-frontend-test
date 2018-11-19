import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { onBrokenImageUrl } from "../../utils/image-utils";

import { getCartItems, getSubtotal } from "../../selectors/cartSelector";

import { handleProductRemoveClick } from "../../actions/cartAction";

import Cart from "../../components/Cart";
import ShoppingResume from "../../components/ShoppingResume";

class CartContainer extends Component {
  render() {
    const { cartItems, subtotal, handleProductRemoveClick } = this.props;

    return (
      <Fragment>
        <Cart
          onBrokenImageUrl={onBrokenImageUrl}
          cartItems={cartItems}
          handleProductRemoveClick={handleProductRemoveClick}
        />
        <ShoppingResume subtotal={subtotal} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ cartState }) => ({
  cartItems: getCartItems(cartState),
  subtotal: getSubtotal(cartState)
});

const mapDispatchToProps = dispatch => ({
  handleProductRemoveClick: product =>
    dispatch(handleProductRemoveClick(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
