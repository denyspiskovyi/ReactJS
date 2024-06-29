import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <div>
                    <a>Messages</a>
                </div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>Settings</div>
        </nav>
    )

}


export default Navbar;