import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CartItem from "../CartItem";

const propTypes = {};

const defaultProps = {
  cartItems: null
};

const StyledCart = styled.div`
  > div:first-child {
    >div: first-child {
      box-shadow: inset 0px 5px 10px #caa201;
    }
  }
`;

const Cart = ({ cartItems, handleProductRemoveClick, onBrokenImageUrl }) => {
  return (
    <StyledCart>
      {cartItems &&
        cartItems.map(cartItem => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            handleProductRemoveClick={handleProductRemoveClick}
            onBrokenImageUrl={onBrokenImageUrl}
          />
        ))}
    </StyledCart>
  );
};

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
