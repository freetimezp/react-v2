import React from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Mainlist from './components/Mainlist.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
    	<Header />
    	<div className='app-content-wrapper'>
    		<Mainlist />
    		<Profile />
    	</div>
    </div>
  );
}

export default App;
