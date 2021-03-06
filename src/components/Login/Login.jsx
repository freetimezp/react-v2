import React from 'react';

import {reduxForm, Field} from "redux-form";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {required, maxLengthCreator} from '../../utils/validators/validators.js';
import {Input} from '../common/FormsControls/FormsControls.jsx';
import {login} from '../../redux/auth-reducer.js';

import classes from './Login.module.css';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"Your email"}
                    name={"email"}
                    component={Input}
                    validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field
                    placeholder={"Your password"}
                    name={"password"}
                    component={Input}
                    validate={[required, maxLength30]}
                    type={"password"}/>
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={Input}/>Remember me
            </div>

            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && <div>
                <Field
                    placeholder={"Symbols from image"}
                    name={"captcha"}
                    component={Input}
                    validate={[required, maxLength30]}/>
            </div>}

            {error && <div className={classes.formSummeryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);