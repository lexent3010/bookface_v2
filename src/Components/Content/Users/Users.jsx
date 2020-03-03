import React from 'react';
import s from './Users.module.css'
import *as axios from 'axios'
import userPhoto from '../../../img/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={s.setUsersButton}>
                    {pages.map(p =>
                        <span
                            className={this.props.currentPage === p && s.selected}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                        >{p}</span>
                    )}
                </div>
                {
                    this.props.users.filter(u => u.photos.small != null & u.photos.large != null)
                        .map(u => <div key={u.id} className={s.userItem}>
                        <div className={s.avatarBlock}>
                            <div className={s.userAvatar}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div className={s.followButton}>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Remove</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>Add</button>}
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
    }
}

export default Users;