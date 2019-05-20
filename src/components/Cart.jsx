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
    this.props.watchFirebaseCartRef();
  }

  render() {
    return <div>asdasd</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    watchFirebaseCartRef: () => dispatch(watchFirebaseCartRef())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
