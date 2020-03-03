import React from 'react';
import s from "../Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const ProfileBlock = (props) => {

    let profileInfo = props.profileInfo.map(i => <ProfileInfo key={i.id} id={i.id} position={i.position}
                                                              responsibility={i.responsibility}
                                                              telephoneNumber={i.telephoneNumber}
                                                              dateOfEmployment={i.dateOfEmployment}/>);

    return (
        <div>
            <div className={s.profile}>
                {profileInfo}
            </div>
        </div>
    )
};

export default ProfileBlock;