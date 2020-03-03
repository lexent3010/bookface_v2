import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/usersReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Friends) ;