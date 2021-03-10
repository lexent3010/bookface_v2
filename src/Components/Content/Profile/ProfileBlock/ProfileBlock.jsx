import React, { useEffect, useState } from "react";
import s from "../Profile.module.css";

const ProfileBlock = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <div className={s.status}>
        {editMode ? (
          <input
            onChange={onStatusChange}
            type="text"
            value={status}
            autoFocus={true}
            onBlur={deactivateEditMode}
          />
        ) : (
          <div>
            {props.status ? (
              <span onClick={activateEditMode}>Status: {props.status}</span>
            ) : (
              <span>not status</span>  
            )}
          </div>
        )}
      </div>
      <div className={s.profile}>About me: {props.profile}</div>
    </div>
  );
};

export default ProfileBlock;
