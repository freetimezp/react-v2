import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.gettingWeather}>
            <input type="text" name="city" placeholder="Город"/>
            <button>Посмотреть погоду</button>
        </form>
    );
}

export default Form;