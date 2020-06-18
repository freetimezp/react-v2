import React from 'react';
import './App.css';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Route} from "react-router-dom";

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Mainlist from './components/Mainlist/Mainlist.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Login from './components/Login/Login.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';
import {initializeApp} from './redux/app-reducer.js';

class App extends React.Component { 
	componentDidMount() {
    this.props.initializeApp();
  }
	render () {
		if(!this.props.initialized) {
			return <Preloader />
		}
  	return (
	    <div className='app-wrapper'>
	    	<HeaderContainer />
	    	<div className='app-content-wrapper'>
	    		<Mainlist friendsData={this.props.state.friendsPage.friendsData} />
	    		<div className='content'>
	    			<Route 
	    				path='/profile/:userId?'
	    				render={ () => <ProfileContainer /> } />
	    			<Route 
	    				path='/dialogs' 
	    				render={ () => <DialogsContainer /> } />
	    			<Route path="/news" render={ () => <News /> } />
	    			<Route path="/music" render={ () => <Music /> } />
	    			<Route path="/login" render={ () => <Login /> } />
	    			<Route 
	    				path='/users'
	    				render={ () => <UsersContainer /> } />
	    			<Route path="/settings" render={ () => <Settings /> } />
	    		</div>
	    	</div>
	    </div>
  	);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default compose(
	withRouter, 
	connect(mapStateToProps, {initializeApp})) (App);
