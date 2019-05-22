import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import * as actions from "./../actions";
const { addToCart } = actions;

class Browse extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e) {
    this.props.addToCart(e.target.id, this.props.user);
  }
  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <style jsx global>
            {`
              html,
              body {
                height: 100%;
                background: lightyellow;
              }
            `}
          </style>
          <style jsx>{`
            .browsePage {
              display: grid;
              grid-template-columns: 15% 1fr;
            }

            .sidebar {
              background: gray;
              height: 100%;
              text-align: left;
              padding-left: 17%;
              padding-top: 10%;
            }

            .sidebar ul,
            .sidebar li {
              list-style: none;
              padding: 0;
            }

            .sidebar li {
              font-size: 16px;
            }

            .content {
              background: white;
              height: 90vh;
            }
          `}</style>
          <Navbar />
          <div className="browsePage">
            <div className="sidebar">
              <h4>All Items</h4>
              <ul>
                <h4>Computers</h4>
              </ul>
              <li>Laptops</li>
              <li>Desktop</li>
              <li>Mac</li>
              <ul>
                <h4>Smartphones</h4>
              </ul>
              <li>Apple</li>
              <li>Samsung</li>
              <li>Google</li>
            </div>
            <div className="content">
              <a id="Macbook Pro" onClick={this.handleAddToCart}>
                asdad
              </a>
            </div>
          </div>
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
    addToCart: (itemInfo, userId) => dispatch(addToCart(itemInfo, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
