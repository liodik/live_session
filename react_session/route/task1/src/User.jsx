import React, { Component } from 'react';

class User extends Component {
  state = {
    userData: null,
  };
  fetchUser = userId => {
    fetch(`https://api.github.com${userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState({
          userData,
        })
      );
  };
  componentDidMount() {
    this.fetchUser(this.props.match.url);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.url !== prevProps.match.url) {
      this.fetchUser(this.props.match.url);
    }
  }
  render() {
    const { userData } = this.state;

    if (!userData) return null;

    return (
      <div className="user">
        <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{userData.name}</span>
          <span className="user__location">{userData.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
