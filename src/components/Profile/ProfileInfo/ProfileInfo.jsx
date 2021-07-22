import react from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA6crfW5TG98Miwu5LNO6_JwgdGdR7QTRIA&usqp=CAU"></img>
            </div>
            <div className = {classes.discriptionBlock}>
                Avatar + discription
                         </div>
        </div>
    )
}


export default ProfileInfo