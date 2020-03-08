import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Mainlist from './components/Mainlist/Mainlist.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

import {Route} from "react-router-dom";

const App = (props) => {

	let dialogsData = props.state.dialogsPage.dialogsData;
	let messagesData = props.state.dialogsPage.messagesData;
  let postsData = props.state.profilePage.postsData;
  let friendsData = props.state.friendsPage.friendsData;

  let addPost = props.addPost;
  let addMessage = props.addMessage;

  return (
	    <div className='app-wrapper'>
	    	<Header />
	    	<div className='app-content-wrapper'>
	    		<Mainlist friendsData={friendsData} />
	    		<div className='content'>
	    			<Route 
	    				path="/profile" 
	    				render={ () => <Profile postsData={postsData} addPost={addPost} /> } />
	    			<Route 
	    				path="/dialogs" 
	    				render={ () => <Dialogs dialogsData={dialogsData} messagesData={messagesData} addMessage={addMessage} /> } />
	    			<Route path="/news" render={ () => <News /> } />
	    			<Route path="/music" render={ () => <Music /> } />
	    			<Route path="/settings" render={ () => <Settings /> } />
	    		</div>
	    	</div>
	    </div>

  );
}

export default App;
