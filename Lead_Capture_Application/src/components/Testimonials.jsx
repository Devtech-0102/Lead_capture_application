import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "MyCompany helped us launch our website faster than ever. Amazing experience!",
    title: "CEO, TechNova",
  },
  {
    name: "John Smith",
    feedback: "Their support is top-notch. Our mobile app grew 200% in downloads!",
    title: "Product Manager, Appify",
  },
  {
    name: "Sara Lee",
    feedback: "Reliable, creative, and on-time delivery every time.",
    title: "Marketing Head, BrightBiz",
  },
];

const Testimonials = () => (
  <section id="testimonials" style={{ padding: '80px 20px', background: '#f7f7f7' }}>
    <h2 style={{ textAlign: 'center' }}>What Our Clients Say</h2>
    <Row gutter={16} justify="center">
      {testimonials.map((item, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card bordered={false} style={{ margin: '20px' }}>
              <p>"{item.feedback}"</p>
              <strong>{item.name}</strong><br />
              <span style={{ color: '#888' }}>{item.title}</span>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </section>
);

export default Testimonials;
