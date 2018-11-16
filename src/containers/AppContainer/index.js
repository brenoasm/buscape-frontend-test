import React, { Component } from "react";

import App from "../../components/App";

class AppContainer extends Component {
  state = {
    open: true
  }

  toggleCartView = () => {
    const { open } = this.state;

    // Colocar state no redux
    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state;

    return <App toggleCartView={this.toggleCartView} open={open} />;
  }
}

export default AppContainer;
