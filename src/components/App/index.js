import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import Toolbar from "../Toolbar";
import ProductListContainer from "../../containers/ProductListContainer";

const propTypes = {
  totalItems: PropTypes.number,
  menuOpen: PropTypes.bool,
  toggleMenuVisibility: PropTypes.func
};

const defaultProps = {
  totalItems: 0,
  menuOpen: false,
  toggleMenuVisibility: () => {}
};

const StyledApp = styled.div`
  background-color: ${colors.grayPrimary};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px auto;
  grid-row-gap: 20px;

  > div:first-child {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  > div:last-child {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

const App = ({ totalItems, menuOpen, toggleMenuVisibility }) => {
  return (
    <StyledApp>
      <Toolbar
        totalItems={totalItems}
        menuOpen={menuOpen}
        toggleMenuVisibility={toggleMenuVisibility}
      />
      <ProductListContainer />
    </StyledApp>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
