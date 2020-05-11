import React from 'react';
import 'App.css';
import Aside from 'components/aside';
import Header from 'components/header';
import Profile from 'components/profile/content';
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Aside />
        <Profile />
      </div>  
    </BrowserRouter>  
  );
}

export default App;
