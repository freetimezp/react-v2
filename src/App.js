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

	let dialogsData = props.dialogsData;
	let messagesData = props.messagesData;
  let postsData = props.postsData;

  return (
  	<BrowserRouter>
	    <div className='app-wrapper'>
	    	<Header />
	    	<div className='app-content-wrapper'>
	    		<Mainlist />
	    		<div className='content'>
	    			<Route path="/profile" render={ () => <Profile postsData={postsData} /> } />
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
