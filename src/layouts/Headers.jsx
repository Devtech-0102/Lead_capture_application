import React, { useState, useContext } from 'react';
import { Layout, Menu, Switch, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-scroll';
//import './Headers.scss'; // Add custom styles here

const { Header } = Layout;

function Headers() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => setVisible(!visible);

  const menuItems = (
    <>
      <Menu.Item key="1"><Link to="hero" smooth duration={500}>Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="about" smooth duration={500}>About</Link></Menu.Item>
      <Menu.Item key="3"><Link to="services" smooth duration={500}>Services</Link></Menu.Item>
      <Menu.Item key="4"><Link to="contact" smooth duration={500}>Contact</Link></Menu.Item>
    </>
  );

  return (
    <Header
      className="responsive-header"
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: darkMode ? '#1f1f1f' : '#001529'
      }}
    >
      <div className="logo" style={{ color: '#fff', fontWeight: 'bold' }}>
        LeadCapture
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" style={{ backgroundColor: 'transparent' }}>
          {menuItems}
        </Menu>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu">
        <Button icon={<MenuOutlined />} onClick={toggleDrawer} />
        <Drawer
          title="Menu"
          placement="right"
          onClose={toggleDrawer}
          visible={visible}
          bodyStyle={{ padding: 0 }}
        >
          <Menu mode="vertical" theme="light" onClick={toggleDrawer}>
            {menuItems}
          </Menu>
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
            />
          </div>
        </Drawer>
      </div>
    </Header>
  );
}

export default Headers;
