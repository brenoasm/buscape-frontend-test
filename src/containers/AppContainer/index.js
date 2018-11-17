import React, { Component } from "react";
import { connect } from 'react-redux';

import { getToolbarMenuVisibility } from '../../selectors/toolbarMenuSelector';

import { toggleMenuVisibility } from '../../actions/toolbarMenuAction';

import App from "../../components/App";

class AppContainer extends Component {
  render() {
    const { menuOpen, toggleMenuVisibility } = this.props;

    return <App toggleMenuVisibility={toggleMenuVisibility} menuOpen={menuOpen} />;
  }
}

const mapStateToProps = ({ toolbarMenuState }) => ({
  menuOpen: getToolbarMenuVisibility(toolbarMenuState)
});

const mapDispatchToProps = dispatch => ({
  toggleMenuVisibility: () => dispatch(toggleMenuVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
