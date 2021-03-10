import React from 'react'
import { UserType } from '../../../store/usersReducer'
import Paginator from '../../Common/Paginator/Paginator'
import User from './User'

export type UserPropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  usersAPI: any, //!!!!!!!Исправить

  onPageChanged: (pageNumber: number) => void,
  follow: (id: number) => void,
  unfollow: (id: number) => void,
}

const Users: React.FC<UserPropsType> = (props) => {

  return (
    <div>
      <Paginator onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
      currentPage={props.currentPage}/>
      {props.users
        .filter((u: any) => u.photos.small != null && u.photos.large != null)
        .map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}/>
        )}
    </div>
  )
}

export default Users
