import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

const propTypes = {
  subtotal: PropTypes.shape({
    installments: PropTypes.number,
    installmentValue: PropTypes.number,
    value: PropTypes.number
  })
};

const defaultProps = {
  subtotal: {
    installments: 0,
    installmentValue: 0,
    value: 0
  }
};

const StyledShoppingResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

  span {
    font-weight: 700;
  }

  > div {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 8px;
    border-top: solid 1px ${colors.black};
  }
`;

const ShoppingResume = ({ subtotal }) => (
  <StyledShoppingResume>
    <span>subtotal</span>
    <div>
      <span>
        {subtotal.installments}x de R$ {subtotal.installmentValue}
      </span>
      <span>ou R$ {subtotal.value} à vista</span>
    </div>
  </StyledShoppingResume>
);

ShoppingResume.propTypes = propTypes;
ShoppingResume.defaultProps = defaultProps;

export default ShoppingResume;
