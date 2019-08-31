import React from 'react';
import logo from './logo.svg';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='app-header'> 
        <img
          className='app-header__logo'
          src='http://confetti.odessa.ua/wp-content/uploads/2018/06/confetti-logo-%D0%B1%D0%B5%D0%B7-%D1%84%D0%BE%D0%BD%D0%B0.png' 
          alt='логотип'
        />
      </header>

      <div className='main-wrapper'>
        <ul className='app-list'>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Messages</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Music</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>

        <div className='app-content'>
          <div>
            <img 
              className='app-content__image'
              src='https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$'
              alt='пейзаж'
            />
          </div>

          <div className='about'>
            <div className='about-image'>
              <img className='image-0001'
                src='https://images.saatchiart.com/saatchi/298926/art/2358222/1428380-32.jpg'
                alt='foto'
              />
            </div>
            <div>
              <h1 className='about-title'>Dmitro</h1>
              <ul>
                <li className='about-text'>Date birth 2 january</li>
                <li className='about-text'>City Kiev</li>
                <li className='about-text'>Education: BSU'11</li>
                <li className='about-text'>Web-site: wwww.zp.ua</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
