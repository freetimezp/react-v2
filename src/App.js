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

	let dialogsData = [
		{id: 1, name: 'Andrew'},
		{id: 2, name: 'Dmitry'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'}
	];

	let messagesData = [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How is your life?'},
		{id: 3, message: 'Yo Yo'}
	]

  return (
  	<BrowserRouter>
	    <div className='app-wrapper'>
	    	<Header />
	    	<div className='app-content-wrapper'>
	    		<Mainlist />
	    		<div className='content'>
	    			<Route path="/profile" render={ () => <Profile /> } />
	    			<Route path="/dialogs" render={ () => <Dialogs dialogsData={dialogsData} messagesData={messagesData} /> } />
	    			<Route path="/news" render={ () => <News /> } />
	    			<Route path="/music" render={ () => <Music /> } />
	    			<Route path="/settings" render={ () => <Settings /> } />
	    		</div>
	    	</div>
	    </div>
    </BrowserRouter>
  );
}

export default App;
