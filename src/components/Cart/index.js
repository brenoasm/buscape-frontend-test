import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import CartItem from "../CartItem";

const propTypes = {};

const defaultProps = {};

const StyledCart = styled.div`
  > div:first-child {
    >div: first-child {
      box-shadow: inset 0px 5px 10px #caa201;
    }
  }
`;

const Cart = () => {
  return (
    <StyledCart>
      <CartItem />
      <CartItem />
    </StyledCart>
  );
};

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
