import React from 'react';
import s from './Users.module.css'
import *as axios from 'axios'
import userPhoto from '../../../img/user.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)})
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={s.userItem}>
                    <div className={s.avatarBlock}>
                        <div className={s.userAvatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                        </div>
                        <div className={s.followButton}>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Remove</button>
                                : <button onClick={() => {props.follow(u.id)}}>Add</button>}
                        </div>
                    </div>
                    <div className={s.infoBlock}>
                        <div className={s.name}>
                            {u.name}
                        </div>
                        <div className={s.status}>
                            {u.status}
                        </div>
                        <div className={s.location}>
                            {'u.location.city'}, {'u.location.country'}
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;