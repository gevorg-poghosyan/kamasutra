import React from 'react';
import classes from './Profile.module.css';
import MyPostsConteiner from './MyPosts/MyPostsConteiner'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsConteiner />
        </div>
    );
}
export default Profile;