import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Web Development',
    description:
      'I have experience in building websites using React, Node.js, Express, MongoDB, and more. ',
    imgUrl: images.about01,
  },
  {
    title: 'Web Design',
    description:
      'I have experience in building websites using React, Node.js, Express, MongoDB, and more. ',
    imgUrl: images.about02,
  },
  {
    title: 'UI/UX',
    description:
      'I have experience in building websites using React, Node.js, Express, MongoDB, and more. ',
    imgUrl: images.about03,
  },
  {
    title: 'Web Animations',
    description:
      'I have experience in building websites using React, Node.js, Express, MongoDB, and more. ',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
