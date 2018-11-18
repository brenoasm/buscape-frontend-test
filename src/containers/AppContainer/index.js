import React, { Component } from "react";
import { connect } from "react-redux";

import { getToolbarMenuVisibility } from "../../selectors/toolbarMenuSelector";

import { getTotalItems } from "../../selectors/cartSelector";

import { toggleMenuVisibility } from "../../actions/toolbarMenuAction";

import App from "../../components/App";

class AppContainer extends Component {
  render() {
    const { menuOpen, toggleMenuVisibility, totalItems } = this.props;

    return (
      <App
        totalItems={totalItems}
        toggleMenuVisibility={toggleMenuVisibility}
        menuOpen={menuOpen}
      />
    );
  }
}

const mapStateToProps = ({ toolbarMenuState, cartState }) => ({
  menuOpen: getToolbarMenuVisibility(toolbarMenuState),
  totalItems: getTotalItems(cartState)
});

const mapDispatchToProps = dispatch => ({
  toggleMenuVisibility: () => dispatch(toggleMenuVisibility())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
