import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../img/user.png";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../redux/usersReducer";

export type UserPropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  usersAPI: any; //!!!!!!!Исправить

  onPageChanged: (pageNumber: number) => void;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const Users: React.FC<UserPropsType> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.setUsersButton}>
        {pages.map((p) => (
          <span key={p}
            // className={props.currentPage === p && s.selected}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users
        .filter((u: any) => u.photos.small != null && u.photos.large != null)
        .map((u) => (
          <div key={u.id} className={s.userItem}>
            <div className={s.avatarBlock}>
              <div className={s.userAvatar}>
                <NavLink to={"profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt="avatar"
                  />
                </NavLink>
              </div>
              <div className={s.followButton}>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
            <div className={s.infoBlock}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
              <div className={s.location}>
                {"u.location.city"}, {"u.location.country"}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
