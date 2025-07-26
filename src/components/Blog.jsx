import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: '5 Web Trends in 2025',
    excerpt: 'Discover the latest web technologies shaping the future.',
  },
  {
    title: 'How We Scaled Our App',
    excerpt: 'A story of growth and infrastructure choices.',
  },
  {
    title: 'Designing for Accessibility',
    excerpt: 'Learn how to make your web apps inclusive.',
  },
];

const Blog = () => (
  <section id="blog" style={{ padding: '80px 20px' }}>
    <h2 style={{ textAlign: 'center' }}>Latest Blog Posts</h2>
    <Row gutter={16} justify="center">
      {blogs.map((post, idx) => (
        <Col xs={24} sm={12} md={8} key={idx}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card title={post.title} bordered={false} style={{ margin: '20px' }}>
              <p>{post.excerpt}</p>
              <a href="#">Read More →</a>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </section>
);

export default Blog;