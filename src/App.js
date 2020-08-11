import React from 'react';
import './App.css';

import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import Mainlist from './components/Mainlist/Mainlist.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import Login from './components/Login/Login.jsx';
import Preloader from './components/common/Preloader/Preloader.jsx';

import {initializeApp} from './redux/app-reducer.js';
import CitiesWeather from "./components/common/CitiesWeather/CitiesWeather";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some errors occured");
        console.log(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-content-wrapper'>
                    <Mainlist friendsData={this.props.state.friendsPage.friendsData}/>
                    <div className='content'>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <React.Suspense fallback={<Preloader/>}>
                            <Route
                                path='/profile/:userId?'
                                render={() => <ProfileContainer/>}/>
                            <Route
                                path='/dialogs'
                                render={() => <DialogsContainer/>}/>
                        </React.Suspense>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route
                            path='/users'
                            render={() => <UsersContainer/>}/>
                        <Route path='/weather' render={() => <CitiesWeather/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        {/*<Route path='*' render={() => <div>404 not found</div>}/>*/}
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
    connect(mapStateToProps, {initializeApp}))(App);
