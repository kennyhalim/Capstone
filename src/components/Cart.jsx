import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "./../actions";
const { watchFirebaseCartRef } = actions;
import Navbar from "./Navbar";
const { deleteAllInCart } = actions;

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    //this.handleClearCart = this.handleClearCart.bind(this);
  }
  // handleClearCart(e) {
  //   this.props.deleteAllInCart(this.props.user);
  // }

  componentDidMount() {
    if (this.props.user) {
      this.props.watchFirebaseCartRef(this.props.user);
    }
  }

  render() {
    console.log(this.props.itemState);
    if (this.props.authenticated) {
      return (
        <div>
          <Navbar />
          {Object.keys(this.props.itemState).map(itemId => {
            let item = this.props.itemState[itemId];
            console.log(item);
            return <p>{item.item}</p>;
          })}
          <button onClick={this.handleClearCart}>Clear Cart</button>
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
    itemState: state.item
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
