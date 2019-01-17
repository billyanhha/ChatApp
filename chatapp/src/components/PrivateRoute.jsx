import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
    render() {

        const { isLoggedIn } = this.props;
        
        return (
            <div>
                <Route
                    render={props =>
                        isLoggedIn ? (
                            <this.props.component {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: props.location }
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