import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
    };
    const items = [
        {
            label: (
                <Link to="/home">
                    Home
                </Link>
            ),

            key: 'home',

        },
        user ?
        {
            label: (
                user.displayName
            ),

            key: 'profile',

        }:"",
        {
            label: (
                user ?  <Button onClick={handleSignOut}> sign out</Button> : <Link to="/login">
                    Login
                </Link>
            ),

            key: 'login',

        },


    ];


    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div>
            <Menu style={{ padding: "0px 10%" }} theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default Navbar;