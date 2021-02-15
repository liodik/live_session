import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// algo
// 1. create empty state
// 2. make http call, componentDidMount && update state
// 3.  handle UserID

const User = () => {
  // input: InitState
  // output: array (stateValue, func to update state)

  const [userInfo, setUserInfo] = useState({
    avatar: null,
    name: null,
    location: null,
  });
  const { userId } = useParams();
  useEffect(() => {
    // useEffect
    // input: func, arr
    // output: undefined
    console.log('componentDidMount');
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;
        setUserInfo({
          avatar: avatar_url,
          name,
          location,
        });
      });
    return () => {
      //componentWillUnmount
      console.log('componentWillUnmount');
    };
  }, [userId]);
  // callback
  // input
  // output: undefined
  const { avatar, name, location } = userInfo;
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
};

export default User;
