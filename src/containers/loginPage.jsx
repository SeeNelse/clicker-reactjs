import React, { Component } from 'react';
import LoginWidget from '../components/login/loginWidget';

class LoginPage extends Component {
  render() {
    return (
      <div className="login__main">
        <LoginWidget />
      </div>
    );
  }
}

export default LoginPage;