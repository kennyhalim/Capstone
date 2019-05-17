import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import constants from "./../constants";
const { c } = constants;
import * as actions from "./../actions";
const { signIn } = actions;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    return (
      <div>
        <style jsx>
          {`
            .center {
              display: flex;
              justify-content: space-around;
            }
            .bookingForm {
              border: 1px solid #515151;
              background-color: white;
              width: 400px;
              height: 380px;
              border-radius: 5px;
              margin-top: 7%;
              padding: 25px 25px 0px 25px;
            }

            .bookingForm h1 {
              color: #484848;
            }

            label {
              font-size: 12px;
              font-weight: bold;
            }

            .alignCenter {
              text-align: center;
            }
            .input {
              height: 48px;
              width: 377px;
              font-size: 18px;
              padding: 0px 10px 0px 10px;
              margin-top: 5px;
            }

            .submitBtn {
              height: 48px;
              width: 100px;
              border-radius: 5px;
              background: #ff5a5f;
              color: white;
              font-size: 15px;
              font-weight: bold;
            }

            .submitBtn:hover {
              cursor: pointer;
            }

            .btnContainer {
              display: flex;
              justify-content: flex-end;
              margin-top: 20px;
            }
          `}
        </style>
        <Navbar />
        <div className="center">
          <form className="bookingForm" onSubmit={this.handleSubmit}>
            <div className="alignCenter">
              <h1>Login</h1>
            </div>
            <label>Email </label>
            <br />
            <input
              className="input"
              id="email"
              type="email"
              placeholder="Email"
              required
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              id="password"
              type="password"
              placeholder="Password"
              required
              onChange={this.handleChange}
            />
            <p>
              Don't have an account? <Link to="/signup">Sign up!</Link>
            </p>
            <div className="btnContainer">
              <button className="submitBtn" type="submit">
                Log in
              </button>
              {this.props.authError ? <p>{this.props.authError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  authError: PropTypes.object
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
