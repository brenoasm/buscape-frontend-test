import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { numberToReal } from "../../utils/converters";

const propTypes = {
  price: PropTypes.object
};

const defaultProps = {
  price: {
    installmentValue: 0,
    installments: 0,
    value: 0
  }
};

const StyledCartSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4em;
`;

const CartSubtotal = ({ price }) => (
  <StyledCartSubtotal>
    <span>
      {price.installments}x R$ {numberToReal(price.installmentValue)}
    </span>
    <span>ou R$ {numberToReal(price.value)} à vista</span>
  </StyledCartSubtotal>
);

CartSubtotal.propTypes = propTypes;
CartSubtotal.defaultProps = defaultProps;

export default CartSubtotal;
