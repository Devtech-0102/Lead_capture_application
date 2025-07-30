// import { Collapse, Button } from 'antd';
// import { motion } from 'framer-motion';

// const { Panel } = Collapse;

// const jobs = [
//   {
//     title: 'Frontend Developer',
//     description: 'Looking for a React developer with 2+ years experience.',
//   },
//   {
//     title: 'UI/UX Designer',
//     description: 'Creative designer with experience in Figma and Adobe tools.',
//   },
//   {
//     title: 'Backend Engineer',
//     description: 'Node.js and MongoDB experience preferred.',
//   },
// ];

// const Careers = () => (
//   <section id="careers" style={{ padding: '80px 20px', background: '#fafafa' }}>
//     <h2 style={{ textAlign: 'center' }}>Careers</h2>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       style={{ maxWidth: 800, margin: 'auto' }}
//     >
//       <Collapse accordion>
//         {jobs.map((job, idx) => (
//           <Panel header={job.title} key={idx}>
//             <p>{job.description}</p>
//             <Button type="primary">Apply Now</Button>
//           </Panel>
//         ))}
//       </Collapse>
//     </motion.div>
//   </section>
// );

// export default Careers;

import React from "react";
import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import {
  BulbOutlined,
  DeploymentUnitOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import './Careers.scss'

const processSteps = [
  {
    icon: <BulbOutlined style={{ fontSize: 40 }} />,
    title: "Understand",
  },
  {
    icon: <DeploymentUnitOutlined style={{ fontSize: 40 }} />,
    title: "Develop a Plan",
  },
  {
    icon: <UserSwitchOutlined style={{ fontSize: 40 }} />,
    title: "Assign a Team",
  },
  {
    icon: <SettingOutlined style={{ fontSize: 40 }} />,
    title: "Implement",
  },
  {
    icon: <MessageOutlined style={{ fontSize: 40 }} />,
    title: "Support",
  },
];

const Careers = () => {
  return (
    <div className="our-process">
      <h1 style={{ color: "#16002F" }}><b> Our Process</b></h1>
      <p style={{ maxWidth: '80%', margin: "0 auto", fontSize: "19px", color: "#555", textAlign:'center', fontWeight:540}}>
        Each customer relationship is a unique partnership, and we treat it as such.
        We sit down and develop a personalized plan for your custom data management—never ever using a cookie-cutter approach.
        We know that every client has different platforms, configurations, challenges, and needs, so we seek to understand the environment before we develop a solution.
      </p>

      <div className="ourprocess-icons">
        <Row gutter={[16, 16]} justify="center">
          {processSteps.map((step, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={4}
              style={{ textAlign: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={{ color: "#DFA9FF" }}
              >
                {step.icon}
                <div style={{ color: "white", fontWeight: "bold", marginTop: 10, fontSize:'18px'}}>
                  {step.title}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Careers;
