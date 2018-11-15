import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar';

const propTypes = {};

const defaultProps = {};

const StyledApp = styled.div``;

const App = ({
  open,
  toggleCartView
}) => {
  return (
    <StyledApp>
      <Toolbar open={open} toggleCartView={toggleCartView} />
    </StyledApp>
  )
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
