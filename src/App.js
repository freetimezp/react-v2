import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
    	<div className='app-header'>
    		<img className='app-header-img' src='https://avatanplus.com/files/resources/mid/5ce66f58a5a0216ae422f266.png' alt='foto' />
    	</div>
    	<div className='app-content-wrapper'>
    		<div className='app-main-list'>
    			<a href='#s'>Profile</a>
    			<a href='#s'>Messages</a>
    			<a href='#s'>News</a>
    			<a href='#s'>Music</a>
    			<a href='#s'>Settings</a>
    		</div>
    		<div className='app-content'>
    			<div>
	    			<img 
	    				className='app-content-img' 
	    				src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKeAg6we76Eo8qIbNC275den4JCB-WozGwGAXzNClglpjTWJgT' 
	    				alt='foto' 
	    			/>
    			</div>
    			<div>
    				<div>
    					Avatar
    				</div>
    				<div>
    					Description
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  );
}






export default App;
