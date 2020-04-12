import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Mainlist from './components/Mainlist/Mainlist.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

import {Route} from "react-router-dom";

const App = (props) => {

  return (
	    <div className='app-wrapper'>
	    	<Header />
	    	<div className='app-content-wrapper'>
	    		<Mainlist friendsData={props.state.friendsPage.friendsData} />
	    		<div className='content'>
	    			<Route 
	    				path="/profile" 
	    				render={ () => <Profile store={props.store} /> } />
	    			<Route 
	    				path="/dialogs" 
	    				render={ () => <DialogsContainer store={props.store} /> } />
	    			<Route path="/news" render={ () => <News /> } />
	    			<Route path="/music" render={ () => <Music /> } />
	    			<Route path="/settings" render={ () => <Settings /> } />
	    		</div>
	    	</div>
	    </div>

  );
}

export default App;
