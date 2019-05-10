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
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
              "Helvetica Neue", sans-serif;
          }
        `}</style>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TicketList ticketList={this.props.masterTicketList} />
            )}
          />
          <Route path="/newticket" component={NewTicketControl} />
          <Route
            path="/admin"
            render={props => (
              <Admin currentRouterPath={props.location.pathname} />
            )}
          />
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
