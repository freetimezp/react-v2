import React from 'react';

const Weather = (props) => {
    return (
        <div>
            {props.city &&
            <div>
                <div>Город, страна: {props.city}, {props.country}</div>
                <div>Температура: {props.temp}&deg;C</div>
                <div>Давление: {props.pressure}</div>
                <div>Закат солнца: {props.sunset}</div>
            </div>
            }
            {props.error && <div>{props.error}</div>}
        </div>
    );
}

export default Weather;