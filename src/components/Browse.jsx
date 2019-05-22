import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";
const { addToCart } = actions;

class Browse extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e) {
    console.log(e.target.value);
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
                background: white;
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
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              text-align: center;
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
              <div className="itemBox">
                <h4>Macbook Pro</h4>
                <h5>Price: $4.99</h5>
                <button id="Macbook Pro" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>iPhone X</h4>
                <h5>Price: $4.99</h5>
                <button id="iPhone X" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>Samsung Galaxy S10</h4>
                <h5>Price: $4.99</h5>
                <button id="Samsung Galaxy S10" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>Macbook Pro</h4>
                <h5>Price: $4.99</h5>
                <button id="Macbook Pro" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>iPhone X</h4>
                <h5>Price: $4.99</h5>
                <button id="iPhone X" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>Samsung Galaxy S10</h4>
                <h5>Price: $4.99</h5>
                <button id="Samsung Galaxy S10" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>Macbook Pro</h4>
                <h5>Price: $4.99</h5>
                <button id="Macbook Pro" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>iPhone X</h4>
                <h5>Price: $4.99</h5>
                <button id="iPhone X" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
              <div className="itemBox">
                <h4>Samsung Galaxy S10</h4>
                <h5>Price: $4.99</h5>
                <button id="Samsung Galaxy S10" onClick={this.handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
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
