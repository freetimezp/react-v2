import React, {useState} from 'react';

import classes from './ProfileInfo.module.css';

import Preloader from './../../common/Preloader/Preloader.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';

import userPhoto from '../../../assets/images/user.jpg';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img
                    className={classes.img}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKeAg6we76Eo8qIbNC275den4JCB-WozGwGAXzNClglpjTWJgT'
                    alt='foto'
                />
            </div>
            <div className={classes.profile_block}>
                <div className={classes.profile_image}>
                    <img src={props.profile.photos.large || userPhoto} alt='profile avator'/>
                </div>
                <div>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    {editMode
                        ? <ProfileDataForm profile={props.profile}/>
                        : <ProfileData
                            goToEditMode={() => {
                                setEditMode(true)
                            }}
                            profile={props.profile}
                            isOwner={props.isOwner}
                        />}
                </div>
            </div>
        </div>
    );
}


const ProfileData = (props) => {
    return (
        <div>
            <div>
                <h3 className={classes.profile_title}>{props.profile.fullName}</h3>
            </div>
            <div className={classes.profile_text}>
                <div>Full name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                {
                    props.profile.lookingForAJob &&
                    <div>
                        My professional skills: {props.profile.lookingForAJobDescription}
                    </div>
                }
                <div className={classes.contactWrapper}>
                    Contacts: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                </div>
            </div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit profile info</button>
            </div>}
        </div>
    );
}

const ProfileDataForm = (props) => {
    return (
        <div>
            Form
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}>{contactTitle}: {contactValue}</div>
    );
}

export default ProfileInfo;