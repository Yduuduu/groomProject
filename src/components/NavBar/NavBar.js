import React from 'react'
import { Menu } from 'antd';
import './Navbar.css';

function NavBar() {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          제품보기
        </Menu.Item>
        <Menu.Item>
          브랜드 스토리
        </Menu.Item>
        <Menu.Item>
          고객센터
        </Menu.Item>
      </Menu>
    </>
    /*<div>
      <ul>
        <li>
          제품보기
        </li>
        <li>
          브랜드 스토리
        </li>
        <li>
          고객센터
        </li>
      </ul>
    </div>*/
  )
}

export default NavBar