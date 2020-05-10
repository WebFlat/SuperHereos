import React from 'react';
import 'App.css';
import Aside from 'components/aside';
import Header from 'components/header';
import Profile from 'components/profile/content';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
