import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        me: state.auth.id
    }
};

export default connect(mapStateToProps, {})(Navbar)