import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from "../../redux-store/auth/actions";
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div>
                <h3>
                    This is Home page
                <button onClick={this.props.onLogoutAction} >Logout</button>
                </h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLogoutAction : () => {
            dispatch(logoutAction())
          }
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);