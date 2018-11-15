import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from '../../theme';

const propTypes = {};

const defaultProps = {};

const StyledCartItem = styled.div`
  margin-top: 2px;
  padding: 20px;
  background-color: ${colors.toolbarItems};
  min-height: 70px;
  align-self: stretch;
`;

const CartItem = () => {
  return <StyledCartItem>teste</StyledCartItem>;
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
