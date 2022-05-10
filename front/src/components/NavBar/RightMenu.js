import React, {useState}  from 'react'
import { Menu } from 'antd';
import axios from 'axios';

function RightMenu(props) {
  return (
        <Menu mode={props.mode}>
            <Menu.Item>
                <a href="/login">LOGIN</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/signup">SIGN UP</a>
            </Menu.Item>
        </Menu>
        
            /*로그인 하지 않았을 때
            <li>
                LOGIN
            </li>
            <li>
                SIGN UP
            </li>*/
            /*로그인 후
            <li>
                MY PAGE
            </li>
            <li>
                CART
            </li>
            <li>
                LOGOUT
            </li>*/
        
  )
}

export default RightMenu