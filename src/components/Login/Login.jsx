import React from 'react';

import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {required, maxLengthCreator} from './../../utils/validators/validators.js';
import {Input} from './../common/FormsControls/FormsControls.jsx';
import {login} from './../../redux/auth-reducer.js'; 

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field 
					placeholder={"Your email"} 
					name={"email"} 
					component={Input}
					validate={[required, maxLength30]} />
			</div>
			<div>
				<Field 
					placeholder={"Your password"} 
					name={"password"} 
					component={Input}
					validate={[required, maxLength30]}
					type={"password"} />
			</div>
			<div>
				<Field 
					type={"checkbox"} 
					name={"rememberMe"} 
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
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if(props.isAuth) {
		return <Redirect to={"/profile"} />
	}
	return (
			<div>
				<h1>Login</h1>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);