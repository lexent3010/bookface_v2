import React from 'react';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <div className={s.profileImgBlock}>
                <img src="https://i.ibb.co/st5tL86/profile-Img.png" alt="profile img"/>
            </div>
            <div className={s.avatarBlock}>
                <div className={s.avatar}>
                    <img src="https://i.ibb.co/HVT225d/fwd9e.jpg" alt="avatar"/>
                </div>
            </div>
            <div className={s.profileBlock}>
                <div className={s.profile}>
                    profile
                </div>
            </div>
            <div className={s.projectsBlock}>
                <div>projects</div>
            </div>
            <div className={s.photoBlock}>
                photo
            </div>
            <div className={s.postsBlock}>
                posts
            </div>
        </div>
    )
};
/*{s.profilePage}*/
export default Profile;