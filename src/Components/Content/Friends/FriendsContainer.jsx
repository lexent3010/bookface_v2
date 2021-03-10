import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../../store/usersReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers})(Friends);