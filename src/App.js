import React from 'react';

import Header from './Components/Header/Header.jsx';
import AppList from './Components/AppList/AppList.jsx';
import AppContent from './Components/AppContent/AppContent.jsx';


import './App.css';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />

      <div className='main_wrapper'>
        <AppList />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
