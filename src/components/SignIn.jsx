import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
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
          <form className="bookingForm">
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
              ref={input => {
                this._email = input;
              }}
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              ref={input => {
                this._password = input;
              }}
            />
            <p>
              Don't have an account? <Link to="/signup">Sign up!</Link>
            </p>
            <div className="btnContainer">
              <button className="submitBtn" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
