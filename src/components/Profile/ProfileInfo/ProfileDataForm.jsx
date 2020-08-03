import React from "react";
import classes from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <h3 className={classes.profile_title}>{profile.fullName}</h3>
            </div>
            <div className={classes.profile_text}>
                <div>
                    Full name: {createField("Full name", "fullName", [], Input)}
                </div>
                <div>
                    About me: {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div>
                    Looking for a job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div>
                    My professional skills: {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div className={classes.contactWrapper}>
                    Contacts: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.contact}>
                        <span>{key}: {createField(key + " link", "contacts." + key, [], Input)}</span>
                    </div>
                })}
                </div>
                { error && <div className={classes.formSummeryError}>{error}</div> }
                <div>
                    <button>Save profile info</button>
                </div>
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;

