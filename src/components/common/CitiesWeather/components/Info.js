import React from 'react';

const cityMapWeather = "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=47.9003&lon=35.0487&zoom=5";

const Info = (props) => {
    return (
        <div>
            <h2>Погодное приложение</h2>
            <p>Узнайте погоду в Вашем городе!</p>
            <p>Найдите Ваш город на карте <a href={cityMapWeather}>openweathermap.org</a> и введите его название в форму ниже!</p>
        </div>
    );
}

export default Info;