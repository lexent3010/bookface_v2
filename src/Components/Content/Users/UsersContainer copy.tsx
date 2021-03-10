import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
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

class UsersContainer extends React.Component<PropsTypes> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isLoad && <Preloader />}
        <Users
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          usersAPI={this.props.usersAPI}
        />
      </>
    );
  }
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
})(UsersContainer);
