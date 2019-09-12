import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import AppList from './Components/AppList/AppList.jsx';
import Profile from './Components/Pages/Profile/Profile.jsx';
import Dialogs from './Components/Pages/Dialogs/Dialogs.jsx';
import News from './Components/Pages/News/News.jsx';
import Music from './Components/Pages/Music/Music.jsx';
import Settings from './Components/Pages/Settings/Settings.jsx';

import './App.css';

const App = (props) => {

  return (
  	<BrowserRouter>
      <div className='app_wrapper'>
        <Header />

        <div className='main_wrapper'>
          <AppList />
          <div className='main_wrapper_content'>
          	<Route path='/Profile' render={ () => <Profile State={props.State.profilePage} />} />
          	<Route path='/Dialogs' render={ () => <Dialogs State={props.State.dialogsPage} />} />
          	<Route path='/News' component={News} />
          	<Route path='/Music' component={Music} />
          	<Route path='/Settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
