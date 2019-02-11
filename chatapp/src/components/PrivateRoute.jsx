import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
    render() {

        const { isLoggedIn  , location } = this.props;
        return (
            <div>
                <Route
                    render={props =>
                        isLoggedIn ? (
                            <props.component {...props} /> // props components
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: location }  // state of previous route
                                    }}
                                />
                            )
                    }
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(
    mapStateToProps,
)(PrivateRoute);