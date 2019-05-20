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
    console.log(this.state);
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
              background: lightgreen;
              height: 100%;
            }

            .content {
              background: lightcoral;
              height: 90vh;
            }
          `}</style>
          <Navbar />
          <div className="browsePage">
            <div className="sidebar">asd</div>
            <div className="content">
              <a id="item1" onClick={this.handleAddToCart}>
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
