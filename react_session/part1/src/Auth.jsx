import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
// input:  ---
// output -- component
// 1. show login by default
// 2. show spinner after login click & hide login
// 3. show logout after 2 sec & hide spinner
// 4. show login after logout click and hide logout
class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
