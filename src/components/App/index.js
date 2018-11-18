import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors } from "../../theme";

import Toolbar from "../Toolbar";
import ProductListContainer from "../../containers/ProductListContainer";

const propTypes = {};

const defaultProps = {};

const StyledApp = styled.div`
  background-color: ${colors.grayPrimary};
  display: grid;
  grid-column-template: repeat(12, 1fr);
  grid-row-template: 80px auto;

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
