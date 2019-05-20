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

  componentDidMount() {
    if (this.props.user) {
      this.props.watchFirebaseCartRef(this.props.user);
    }
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <Navbar />
          {Object.keys(this.props.stateAuth.itemInCart).map(itemId => {
            let item = this.props.stateAuth.itemInCart[itemId];
            return <p>{item.item}</p>;
          })}
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
    stateAuth: state.auth,
    authenticated: state.auth.authenticated,
    user: state.auth.user,
    itemInCart: state.auth.itemInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    watchFirebaseCartRef: userId => dispatch(watchFirebaseCartRef(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
