import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from '../../theme';

import { numberToReal } from '../../utils/converters';

const propTypes = {
  price: PropTypes.object
};

const defaultProps = {
  price: {
    installments: 0,
    installmentValue: 0,
    value: 0
  }
};

const StyledProductSubtotal = styled.div`
  > span:first-child {
    font-size: 22px;
    font-weight: 600;
    line-height: 35px;
    color: ${colors.green};

    > span {
      font-size: 32px;
    }
  }

  > span:last-child {
    > span {
      color: ${colors.green};
      font-weight: 600;
    }
  }
`;

const ProductSubtotal = ({
  price
}) => (
  <StyledProductSubtotal>
    <span>
      {price.installments}x R${" "}
      <span>{numberToReal(price.installmentValue)}</span>
    </span>
    <span>
      <br />
      ou <span>R$ {numberToReal(price.value)}</span> à vista
    </span>
  </StyledProductSubtotal>
);

ProductSubtotal.propTypes = propTypes;
ProductSubtotal.defaultProps = defaultProps;

export default ProductSubtotal;
