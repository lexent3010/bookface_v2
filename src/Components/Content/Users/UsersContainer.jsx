import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../../redux/usersReducer";
import Preloader from "../../Common/Preloader/Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        return (
            <>
                {this.props.isLoad && <Preloader/>}
                <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged}
                       follow={this.props.follow} unfollow={this.props.unfollow} usersAPI={this.props.usersAPI}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoad: state.usersPage.isLoad,
        usersAPI: usersAPI
    }
};


export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer);