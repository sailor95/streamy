import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '753927733967-4kmf6hoq66hoq1r7ctcirlbgck9aj9rk.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAythInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>
    } else {
      return <div>i am not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;