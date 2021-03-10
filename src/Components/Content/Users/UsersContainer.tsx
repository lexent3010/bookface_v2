import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  setCurrentPage,
  unfollow,
} from "../../../store/usersReducer";
import Preloader from "../../Common/Preloader/Preloader";
import { usersAPI } from "../../../api/api";
import { UserType } from "../../../store/usersReducer";
import { AppStateType } from "../../../store/reduxStore";
import {
  getUsersSelector,
  getTotalUserCountSelector,
  getPageSizeSelector,
  getIsLoadSelector,
  getCurrentPageSelector,
} from "../../../store/selectors/usersSelector";
import Paginator from "../../Common/Paginator/Paginator";
import User from "./User";

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  usersAPI: any; //!!!!!!!Исправить

  isLoad: boolean;
};

type MapDispatchPropsType = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;

  getUsers: (pageNumber: number, pageSize: number) => void;
  setCurrentPage: (pageNumber: number) => void;
};

type OwnPropsType = {};

export type PropsTypes = MapStatePropsType &
  MapDispatchPropsType &
  OwnPropsType;

const Users: React.FC<PropsTypes> = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.totalUsersCount]
)

  const onPageChanged = (pageNumber: number) => {
    props.getUsers(pageNumber, props.pageSize);
    props.setCurrentPage(pageNumber);
  };

    return (
      <>
        {props.isLoad && <Preloader />}
        <Paginator onPageChanged={onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
      currentPage={props.currentPage}/>
      {props.users
        .filter((u: any) => u.photos.small != null && u.photos.large != null)
        .map(u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}/>
        )}
      </>
    );
  }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUserCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isLoad: getIsLoadSelector(state),
    usersAPI: usersAPI,
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(Users);
