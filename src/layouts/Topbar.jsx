import React from "react";
import { MailOutlined, ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const Topbar = () => {
  return (
    <div className="topbar">
    
        <Col>
          <span><MailOutlined /> info@example.com</span>
          <span><ClockCircleOutlined /> Mon - Fri 8.00 am - 6.00 pm</span>
        </Col>
        <Col>
          <span><UserOutlined /> Login</span>
          <span className="social-icons">
            <FacebookFilled />
            <InstagramFilled />
          </span>
        </Col>
   
    </div>
  );
};

export default Topbar;
