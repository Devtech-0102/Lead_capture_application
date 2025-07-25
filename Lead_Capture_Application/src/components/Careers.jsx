import { Collapse, Button } from 'antd';
import { motion } from 'framer-motion';

const { Panel } = Collapse;

const jobs = [
  {
    title: 'Frontend Developer',
    description: 'Looking for a React developer with 2+ years experience.',
  },
  {
    title: 'UI/UX Designer',
    description: 'Creative designer with experience in Figma and Adobe tools.',
  },
  {
    title: 'Backend Engineer',
    description: 'Node.js and MongoDB experience preferred.',
  },
];

const Careers = () => (
  <section id="careers" style={{ padding: '80px 20px', background: '#fafafa' }}>
    <h2 style={{ textAlign: 'center' }}>Careers</h2>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ maxWidth: 800, margin: 'auto' }}
    >
      <Collapse accordion>
        {jobs.map((job, idx) => (
          <Panel header={job.title} key={idx}>
            <p>{job.description}</p>
            <Button type="primary">Apply Now</Button>
          </Panel>
        ))}
      </Collapse>
    </motion.div>
  </section>
);

export default Careers;
