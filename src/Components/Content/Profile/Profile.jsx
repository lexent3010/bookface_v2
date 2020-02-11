import React from 'react';
import s from './Profile.module.css'
import AvatarBlock from "./AvatarBlock/AvatarBlock";
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import PostsBlock from "./PostsBlock/PostsBlock";
import ProfileBlock from "./ProfileBlock/ProfileBlock";
import ProfileImgBlock from "./ProfileImgBlock/ProfileImgBlock";
import ProjectsBlock from "./ProjectBlock/ProjectsBlock";

const Profile = (props) => {
    return (
        <div className={s.profilePage}>
            <div className={s.profileImgBlock}>
               <ProfileImgBlock/>
            </div>
            <div className={s.avatarBlock + ' ' + s.block}>
                <AvatarBlock/>
            </div>
            <div className={s.profileBlock + ' ' + s.block}>
                <ProfileBlock/>
            </div>
            <div className={s.projectsBlock + ' ' + s.block}>
                <ProjectsBlock/>
            </div>
            <div className={s.photoBlock + ' ' + s.block}>
                <PhotoBlock/>
            </div>
            <div className={s.postsBlock + ' ' + s.block}>
                <PostsBlock
                    newPost={props.newPost}
                    posts={props.state.posts} />
            </div>
        </div>
    )
};
/*{s.profilePage}*/
export default Profile;