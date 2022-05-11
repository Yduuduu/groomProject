import React, {useState, useEffect}  from 'react'
import { Menu } from 'antd';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RightMenu(props) {
    const navigate = useNavigate();
    const [ isLogin, setIsLogin ] = useState(sessionStorage.getItem("isLogin"));
    const {onLogin} =props
    const {loginState} =props
    const [user_name, setUser_name ] = useState(sessionStorage.getItem("user_name"));

    const logoutHandler = () => {
        axios.get('/api/member/logout')
        .then((res)=>{
            console.log("logout", res.data)
            console.log(window.sessionStorage);
            window.sessionStorage.clear();    
            setIsLogin(false);
            onLogin(false);
            setUser_name('');
            navigate("/");
        })
        .catch((e)=>{
            console.log(e);
        })
    };

    return (   
        <>
            <div id="login" className={props.isLogin ? "off" : "on"}>
                <Menu mode={props.mode}>
                    <Menu.Item>
                        <a href="/login">LOGIN</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/signup">SIGN UP</a>
                    </Menu.Item>
                </Menu>
            </div>
            
            <div id="logout" className={props.isLogin ? "on" : "off"}>
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