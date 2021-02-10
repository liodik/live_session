import React, { Component } from 'react';

// algo
// 1. create empty state
// 2. make http call, componentDidMount && update state
// 3.  handle UserID

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      name: null,
      location: null,
    };
  }
  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;
        this.setState({
          avatar: avatar_url,
          name,
          location,
        });
      });

    // TODO make error handler
  };

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.getUserData(this.props.match.params.userId);
    }
  }
  render() {
    const { avatar, name, location } = this.state;
    if (!avatar || !name || !location) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;
