import { Row, Col, Card } from 'antd';
import { CodeOutlined, MobileOutlined, CloudOutlined } from '@ant-design/icons';

const services = [
  { title: "Web Development", icon: <CodeOutlined />, desc: "Modern responsive websites." },
  { title: "Mobile Apps", icon: <MobileOutlined />, desc: "iOS and Android applications." },
  { title: "Cloud Solutions", icon: <CloudOutlined />, desc: "Scalable cloud infrastructure." },
];

const Services = () => (
  <section id="services" style={{ padding: '80px 20px', background: '#fafafa' }}>
    <h2>Our Services</h2>
    <Row gutter={16}>
      {services.map((service, idx) => (
        <Col span={8} key={idx}>
          <Card title={service.icon} variant="outlined">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Services;
