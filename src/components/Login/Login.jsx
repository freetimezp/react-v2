import React from 'react';

import {reduxForm, Field} from "redux-form";

const LoginForm = (props) => {
	return (
			<div>
				<form onSubmit={props.handleSubmit}>
					<div>
						<Field placeholder={"Your login"} name={"login"} component={"input"} />
					</div>
					<div>
						<Field placeholder={"Your password"} name={"password"} component={"input"} />
					</div>
					<div>
						<Field type={"checkbox"} name={"rememberme"} component={"input"} />Remember me
					</div>
					<div>
						<button>Login</button>
					</div>					
				</form>
			</div>
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