import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from '../../../theme';

const propTypes = {
  handleProductAddToCartClick: PropTypes.func,
  product: PropTypes.object
};

const defaultProps = {
  handleProductAddToCartClick: () => {},
  product: null
};

const StyledAddToCartButton = styled.div`
  color: ${colors.white};
  background-color: ${colors.green};
  border: none;
  border-radius: 2px;
  padding: 0 10px;
  cursor: pointer;

  > span {
    text-align: center;
    font-size: 14px;
  }
`;

const AddToCartButton = ({ handleProductAddToCartClick, product }) => (
  <StyledAddToCartButton onClick={() => handleProductAddToCartClick(product)}>
    <span>
      Adicionar ao carrinho <i className="fas fa-chevron-right"></i>
    </span>
  </StyledAddToCartButton>
);

AddToCartButton.propTypes = propTypes;
AddToCartButton.defaultProps = defaultProps;

export default AddToCartButton;
