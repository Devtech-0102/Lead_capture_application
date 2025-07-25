import React from 'react'
import { Layout, Menu, Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-scroll';

const { Header } = Layout;

function Headers() {
   return (
    // darkMode
    <Header style={{
      position: 'fixed', zIndex: 1, width: '100%',
      // backgroundColor: darkMode ? '#1f1f1f' : '#001529'
    }}>
      <div className="logo" style={{ color: '#fff', float: 'left', fontWeight: 'bold' }}>
        LeadCapture
      </div>
      <Menu theme="dark" mode="horizontal" style={{ display: 'inline-block' }}>
        <Menu.Item key="1"><Link to="about" smooth duration={500}>About</Link></Menu.Item>
        <Menu.Item key="2"><Link to="services" smooth duration={500}>Services</Link></Menu.Item>
        <Menu.Item key="3"><Link to="gallery" smooth duration={500}>Gallery</Link></Menu.Item>
        <Menu.Item key="4"><Link to="testimonials" smooth duration={500}>Testimonials</Link></Menu.Item>
        <Menu.Item key="5"><Link to="careers" smooth duration={500}>Careers</Link></Menu.Item>
        <Menu.Item key="6"><Link to="blog" smooth duration={500}>Blog</Link></Menu.Item>
        <Menu.Item key="7"><Link to="contact" smooth duration={500}>Contact</Link></Menu.Item>
      </Menu>
      {/* <div style={{ float: 'right' }}>
        <Switch
          checked={darkMode}
          onChange={(checked) => setDarkMode(checked)}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </div> */}
    </Header>
  );
}

export default Headers