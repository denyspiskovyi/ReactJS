import React from 'react';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>

            <div>
                <img src='https://user-images.githubusercontent.com/3616980/44358570-afc8ac00-a4b5-11e8-8f7e-1ad9b7038ce5.png'></img>
            </div>

            <div className={p.ava}>
                ava + description
            </div>

            <div className={p.myPosts}>
                My posts
                <div className={p.newPost}>
                    New posts
                </div>

                <div className={p.post1}>
                    Post 1
                </div>

                <div className={p.post2}>
                    Post 2
                </div>
                
            </div>
        </div>
    )
}

export default Profile;