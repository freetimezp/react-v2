import React from 'react';

import {reduxForm, Field} from "redux-form";

import {required, maxLengthCreator} from './../../utils/validators/validators.js';
import {Input} from './../common/FormsControls/FormsControls.jsx'; 

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					placeholder={"Your login"} 
					name={"login"} 
					component={Input}
					validate={[required, maxLength15]} />
			</div>
			<div>
				<Field 
					placeholder={"Your password"} 
					name={"password"} 
					component={Input}
					validate={[required, maxLength15]} />
			</div>
			<div>
				<Field 
					type={"checkbox"} 
					name={"rememberme"} 
					component={Input} />Remember me
			</div>
			<div>
				<button>Login</button>
			</div>					
		</form>
		);
}

const LoginReduxForm = reduxForm({
	form: 'login'
}) (LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return (
			<div>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		);
}

export default Login;