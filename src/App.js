import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
    	<Header />
    	<Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
    	<a href='#s'>Main</a>
    	<a href='#s'>News</a>
    	<a href='#s'>About</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
    	<ul>
    		<li>css</li>
    		<li>html</li>
    		<li>js</li>
    	</ul>
    </div>
  );
}


export default App;
