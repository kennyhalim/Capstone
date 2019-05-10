import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import c from "./../constants";
import Home from "./Home";
import Error404 from "./Error404";

class App extends React.Component {
  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
              "Helvetica Neue", sans-serif;
            margin: 0;
          }
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
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
