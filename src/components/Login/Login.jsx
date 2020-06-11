import React from 'react';

const Login = (props) => {
	return (
			<div>
				<h1>Login</h1>
				<form>
					<div>
						<input placeholder={"Your login"} />
					</div>
					<div>
						<input placeholder={"Your password"} />
					</div>
					<div>
						<input type={"checkbox"} />Remember me
					</div>
					<div>
						<button>Login</button>
					</div>					
				</form>
			</div>
		);
}

export default Login;