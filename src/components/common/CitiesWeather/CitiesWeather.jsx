import React from 'react';

import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "4922e164ec17b45fa1aba3e5d394fbf4";

class App extends React.Component {

    state = {
        temp: 0,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let date = new Date(sunset * 1000);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            let pressure = data.main.pressure;
            let pressureInMmHg = Math.floor(pressure * 0.75006);

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: pressureInMmHg,
                sunset: sunset_date,
                error: undefined
            });
        } else {
            this.setState({
                temp: 0,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }

    }

    render() {
        return (
            <div>
                <Info/>
                <Form gettingWeather={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}/>
            </div>
        );
    }
}

export default App;