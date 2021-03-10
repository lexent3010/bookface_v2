import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../../img/user.png'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../store/usersReducer'

export type UserPropsType = {
  user: UserType

  follow: (id: number) => void,
  unfollow: (id: number) => void,
}

const User: React.FC<UserPropsType> = (props) => {
  return (
    <>
          <div className={s.userItem}>
            <div className={s.avatarBlock}>
              <div className={s.userAvatar}>
                <NavLink to={'profile/' + props.user.id}>
                  <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="avatar" />
                </NavLink>
              </div>
              <div className={s.followButton}>
                {props.user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(props.user.id)
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(props.user.id)
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
            <div className={s.infoBlock}>
              <div className={s.name}>{props.user.name}</div>
              <div className={s.status}>{props.user.status}</div>
              <div className={s.location}>
                {'u.location.city'}, {'u.location.country'}
              </div>
            </div>
          </div>
    </>
  )
}

export default User
