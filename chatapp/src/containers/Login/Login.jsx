import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from "../../redux-store/auth/actions";
import { withRouter , Redirect } from "react-router-dom";
import './Login.css';

class Login extends Component {

  state = {loginSuccess: false}

  login = () => {
    this.props.onLoginAction();
    this.setState({loginSuccess : true});
  }

  render() {
    
    const {location} = this.props;
    if(this.state.loginSuccess) return <Redirect to = {`${location.state ? location.state.from.pathname : '/'}`} />;
    
    return (
      <div>
        <h3>
          This is login page
        </h3>
        <button onClick={this.login} >Login</button>
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
    onLoginAction: () => {
      dispatch(loginAction())
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(withRouter(Login));