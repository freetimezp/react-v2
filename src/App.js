import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Mainlist from './components/Mainlist/Mainlist.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

import {Route,BrowserRouter} from "react-router-dom";

const App = (props) => {

  return (
  	<BrowserRouter>
	    <div className='app-wrapper'>
	    	<Header />
	    	<div className='app-content-wrapper'>
	    		<Mainlist />
	    		<div className='content'>
	    			<Route path="/profile" component={Profile} />
	    			<Route path="/dialogs" component={Dialogs} />
	    			<Route path="/news" component={News} />
	    			<Route path="/music" component={Music} />
	    			<Route path="/settings" component={Settings} />
	    		</div>
	    	</div>
	    </div>
    </BrowserRouter>
  );
}

export default App;
