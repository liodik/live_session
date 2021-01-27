import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Auth from './Auth';
import Spinner from './Spinner';

const App = () => {
  const someFunc = () => {
    console.log('Clicked');
  };
  return (
    <div>
      <Login onLogin={someFunc} />
      <Logout />
      <Auth />
      <Spinner size={50} />
    </div>
  );
};

export default App;
