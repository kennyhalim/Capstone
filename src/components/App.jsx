import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./Home";
import Browse from "./Browse";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";
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
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

App.propTypes = {};

export default withRouter(connect(mapStateToProps)(App));
