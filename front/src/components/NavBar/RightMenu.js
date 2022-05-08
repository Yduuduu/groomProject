import React from 'react'
import { Menu } from 'antd';


function RightMenu(props) {
  return (
        <Menu mode={props.mode}>
            <Menu.Item>
                LOGIN
            </Menu.Item>
            <Menu.Item>
                SIGN UP
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