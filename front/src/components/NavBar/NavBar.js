import React, { useState } from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import Icon from '@ant-design/icons';
import './Navbar.css';

function NavBar(props) {
    console.log("props.isLogin : ",props.isLogin)
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
//히스토리

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
        <a className="menu__logo" href="/"><img src="img/0-1.png" alt=''/></a>
        <div className="menu__container">
            <div className="menu_left">
                <LeftMenu mode="horizontal" />
            </div>
            <div className="menu_rigth">
                <RightMenu mode="horizontal" isLogin={props.isLogin} />
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
                {/*<LeftMenu mode="inline" />
                <RightMenu mode="inline" />*/}
            </Drawer>
        </div>
        
    </nav>
  )
}

export default NavBar