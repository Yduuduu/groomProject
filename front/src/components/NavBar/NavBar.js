import React, { useState } from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import Icon from '@ant-design/icons';
import './Navbar.css';

function NavBar({isLogin, onLogin}) {

    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };


  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
        <div className="menu__logo">
            <a href="/">Logo</a>
        </div>
        <div className="menu__container">
            <div className="menu_left">
                <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_rigth">
                <RightMenu mode="horizontal" isLogin={isLogin} onLogin={onLogin}/>
            </div>
            <Button
                className="menu__mobile-button"
                type="primary"
                onClick={showDrawer}
            >
                <Icon type="align-right" />
            </Button>
            <Drawer
                title="GROOM"
                placement="right"
                className="menu_drawer"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <LeftMenu mode="inline" />
                <RightMenu mode="inline" />
            </Drawer>
        </div>
        
    </nav>
  )
}

export default NavBar