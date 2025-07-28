import { useEffect, useRef } from 'react';
import { Card, Row, Col } from 'antd';
import { gsap, ScrollTrigger } from '../js/gsapConfig';

gsap.registerPlugin(ScrollTrigger);

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

const Blog = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="blog" style={{ padding: '80px 20px' }}>
      <h2 style={{ textAlign: 'center' }}>Latest Blog Posts</h2>
      <Row gutter={16} justify="center">
        {blogs.map((post, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <div
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{ margin: '20px' }}
            >
              <Card title={post.title} variant="outlined">
                <p>{post.excerpt}</p>
                <a href="#">Read More →</a>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Blog;
