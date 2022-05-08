import React from 'react'
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
      <Menu mode={props.mode}>
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
  )
}

export default LeftMenu