import React, {useState, useEffect}  from 'react'
import { Menu } from 'antd';
import './Navbar.css';

function RightMenu(props) {
    const {isLogin} = props;
    const [user_name, setUser_name] = useState(sessionStorage.getItem("user_name"));
    const onLogin = useState(0);

    const logoutHandler = () => {
        window.sessionStorage.clear();
        setUser_name('');
        onLogin();
        window.location.href="/";
    };

    return (   
        <>
            <div id="login" className={isLogin ? 'off' : 'on'}>
                <Menu mode={props.mode}>
                    <Menu.Item>
                        <a href="/login">LOGIN</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/signup">SIGN UP</a>
                    </Menu.Item>
                </Menu>
            </div>
            
            <div id="logout" className={isLogin ? 'on' : 'off'} >
                <Menu mode={props.mode}>
                    <Menu.Item>
                        <p>{user_name}님 어서오세요</p>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/">MY PAGE</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/">CART</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a onClick={logoutHandler}>Logout</a>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    )
    }

export default RightMenu