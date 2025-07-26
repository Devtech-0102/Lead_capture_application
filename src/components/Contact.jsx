import { Form, Input, Button } from 'antd';

const Contact = () => (
  <section id="contact" style={{ padding: '80px 20px' }}>
    <h2>Contact Us</h2>
    <Form layout="vertical">
      <Form.Item label="Name" name="name">
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Your Email" />
      </Form.Item>
      <Form.Item label="Message" name="message">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Send Message</Button>
      </Form.Item>
    </Form>
  </section>
);

export default Contact;
