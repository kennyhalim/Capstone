import React, { Component } from "react";
import Navbar from "./Navbar";

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
              height: 450px;
              border-radius: 5px;
              margin-top: 5%;
              padding: 25px 25px 0px 25px;
            }

            .bookingForm h1 {
              color: #484848;
            }

            label {
              font-size: 12px;
              font-weight: bold;
            }

            .name {
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
            <h1>Add a new Keg</h1>
            <label>NAME: </label>
            <br />
            <input
              className="name"
              id="name"
              type="text"
              placeholder="Name"
              required
              ref={input => {
                this._kegName = input;
              }}
            />
            <br />
            <br />
            <label>BRAND: </label>
            <br />
            <input
              className="name"
              type="text"
              placeholder="Brand"
              required
              ref={input => {
                this._kegBrand = input;
              }}
            />
            <div className="btnContainer">
              <button className="submitBtn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
