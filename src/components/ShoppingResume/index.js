import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

const propTypes = {};

const defaultProps = {};

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

const ShoppingResume = () => {
  return (
    <StyledShoppingResume>
      <span>subtotal</span>
      <div>
        <span>5x de R$ 500,00</span>
        <span>ou R$ 4.333,33 à vista</span>
      </div>
    </StyledShoppingResume>
  );
};

ShoppingResume.propTypes = propTypes;
ShoppingResume.defaultProps = defaultProps;

export default ShoppingResume;
