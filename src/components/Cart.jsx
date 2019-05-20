import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "./../actions";
const { watchFirebaseCartRef } = actions;
import Navbar from "./Navbar";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.props.watchFirebaseCartRef(this.props.user);
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <Navbar />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          please log in
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchFirebaseCartRef: () => dispatch(watchFirebaseCartRef())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
