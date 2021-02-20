import React from 'react';
import s from "../Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class ProfileBlock extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        );
        this.props.updateUserStatus(this.state.status)

    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                <div className={s.status}>
                    {this.state.editMode ?
                        <input onChange={this.onStatusChange} type="text" value={this.status} autoFocus={true}
                               onBlur={this.deactivateEditMode}/>
                        :
                        <div>{this.props.status ?
                            <span onClick={this.activateEditMode}>Status: {this.props.status}</span>
                            :
                            <span>not status</span>}</div>}
                </div>
                <div className={s.profile}>
                    About me: {this.props.profile}
                </div>
            </div>
        )
    }
}

export default ProfileBlock;

/*let profileInfo = props.profileInfo.map(i => <ProfileInfo key={i.id} id={i.id} position={i.position}
                                                             responsibility={i.responsibility}
                                                             telephoneNumber={i.telephoneNumber}
                                                             dateOfEmployment={i.dateOfEmployment}/>);*/