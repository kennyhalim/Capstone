import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";
const { watchFirebaseCartRef } = actions;
import Navbar from "./Navbar";
const { deleteItem } = actions;

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  handleDeleteItem(itemId) {
    this.props.deleteItem(itemId, this.props.user);
  }

  componentWillMount() {
    if (this.props.user) {
      this.props.watchFirebaseCartRef(this.props.user);
    }
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <style jsx>{`
            .cartTable {
              display: flex;
              justify-content: space-around;
              margin-top: 7vh;
            }

            table {
              width: 60vw;
            }
            table,
            th,
            td {
              border: 1px solid black;
              border-collapse: collapse;
              text-align: center;
            }

            th,
            td {
              padding: 15px;
            }
          `}</style>
          <Navbar />
          <div className="cartTable">
            <table>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Item Price</th>
              </tr>
              {Object.keys(this.props.itemState).map(itemId => {
                let item = this.props.itemState[itemId];
                return (
                  <tr>
                    <td>{item.item}</td>
                    <td>1</td>
                    <td>
                      $4.99
                      <button onClick={() => this.handleDeleteItem(itemId)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <style jsx>
            {`
              .notLoggedIn {
                height: 90vh;
                display: flex;
                justify-content: space-around;
                align-items: center;
              }
            `}
          </style>
          <Navbar />
          <div className="notLoggedIn">
            <h1>
              Please <Link to="/signin">Login</Link>
            </h1>
          </div>
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
    watchFirebaseCartRef: userId => dispatch(watchFirebaseCartRef(userId)),
    deleteItem: (itemId, userId) => dispatch(deleteItem(itemId, userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
