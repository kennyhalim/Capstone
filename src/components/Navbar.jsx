import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./../actions";
import Logo from "../logo.png";

const { signOut } = actions;

function Navbar(props) {
  if (!props.authenticated) {
    return (
      <div>
        <style jsx>{`
          img {
            margin-left: 10px;
            margin-top: 5px;
            height: 40px;
            width: 30px;
          }
          .navbar {
            background: #515151;
            height: 10vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .logo {
            height: 10vh;
            padding-left: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .rightSide {
            padding-top: 5px;
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 20px;
          }

          .child {
            display: inline-block;
            margin: 20px;
          }

          .child p {
            border-bottom: 2px solid transparent;
            padding-bottom: 10px;
            color: white;
          }
          .child p:hover {
            border-bottom: 2px solid white;
            padding-bottom: 10px;
            cursor: pointer;
          }
        `}</style>
        <div className="navbar">
          <div className="logo">
            <Link style={{ textDecoration: "none" }} to="/">
              <img src={Logo} />
            </Link>
          </div>
          <div className="rightSide">
            <Link to="/">
              <div className="child">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/browse">
              <div className="child">
                <p>Browse</p>
              </div>
            </Link>
            <Link to="/aboutus">
              <div className="child">
                <p>About Us</p>
              </div>
            </Link>
            <Link to="/signin">
              <div className="child">
                <p>Sign in</p>
              </div>
            </Link>
            <Link to="/cart">
              <div className="child">
                <p>Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <style jsx>{`
          .navbar {
            background: #515151;
            height: 10vh;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .logo {
            height: 10vh;
            padding-left: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .rightSide {
            padding-top: 5px;
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 20px;
          }

          .child {
            display: inline-block;
            margin: 20px;
          }

          .child p {
            border-bottom: 2px solid transparent;
            padding-bottom: 10px;
            color: white;
          }
          .child p:hover {
            border-bottom: 2px solid white;
            padding-bottom: 10px;
            cursor: pointer;
          }
        `}</style>
        <div className="navbar">
          <div className="logo">asd</div>
          <div className="rightSide">
            <Link to="/">
              <div className="child">
                <p>Home</p>
              </div>
            </Link>
            <Link to="/browse">
              <div className="child">
                <p>Browse</p>
              </div>
            </Link>
            <Link to="/aboutus">
              <div className="child">
                <p>About Us</p>
              </div>
            </Link>
            <div className="child">
              <p onClick={props.signOut}>Sign out</p>
            </div>
            <Link to="/cart">
              <div className="child">
                <p>Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateAuth: state.auth,
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
