import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import c from "./../constants";

class App extends React.Component {
  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
          }
        `}</style>
        <style jsx>
          {`
            table,
            td {
              border: 1px solid black;
            }

            table {
              border-collapse: collapse;
              height: 90vh;
              width: 90vw;
            }

            td {
              height: 300px;
              width: 300px;
              font-size: 24px;
              text-align: center;
            }
          `}
        </style>
        asdasd
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticTacArray: state.board,
    turn: state.turn
  };
};

App.propTypes = {
  ticTacArray: PropTypes.array,
  turn: PropTypes.bool
};

export default connect(mapStateToProps)(App);
