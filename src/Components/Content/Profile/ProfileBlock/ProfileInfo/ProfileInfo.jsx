import React from 'react';
import s from '../../Profile.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                Position: {props.position}
            </div>
            <div>
                Responsibility: {props.responsibility}
            </div>
            <div>
                Telephone number: {props.telephoneNumber}
            </div>
            <div>
                Date of employment: {props.dateOfEmployment}
            </div>
            <div>
                Users id: http://vreace/{props.id}
            </div>
        </div>
    )
};

export default ProfileInfo;