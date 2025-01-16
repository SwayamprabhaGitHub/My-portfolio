import React from 'react';
import laptopgirl from '../assets/laptopgirl.png';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="pt-40 bg-gradient-to-b from-black via-gray-950 to-sky-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.07 }}
      variants={containerVariants}
    >
      <div className=" mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <motion.div
              className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem] mx-auto md:mx-0"
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl "
                style={{ rotate: -3 }}
                animate={{
                  rotate: [0, -4, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {/* <div className="absolute inset-0 rounded-2xl  flex items-center justify-center"> */}
                <img
                  src={laptopgirl}// Replace with your image URL
                  alt="Descriptive text for the image" // Add alt text for accessibility
                  className="w-full h-full object-fit rounded-2xl drop-shadow-[0px_0px_8px_rgba(192,38,211,1)]" // Style the image
                />
                {/* </div> */}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="md:w-1/2 space-y-6" variants={containerVariants}>
            <motion.h2
              className="text-4xl font-bold border-b py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p className="text-gray-300" variants={itemVariants}>
              Hello! I'm Swayamprabha Priyadarsini, a passionate web developer with a keen eye for design and a love for creating 
              seamless user experiences. Proficient in HTML, CSS, JavaScript and React, I am dedicated to building responsive, accessible, and visually appealing websites that perform seamlessly across devices.
            </motion.p>
            <motion.p className="text-gray-300" variants={itemVariants}>
            I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development, 
            and I’m eager to collaborate and contribute to innovative, impactful projects.
            </motion.p>
            <motion.p className="text-gray-300" variants={itemVariants}>
              📞 +91-7790011844{" "}
              <motion.span className="hidden lg:inline md:ml-3 md:text-gray-300" variants={itemVariants}>
                ✉️ pswayamprabha@gmail.com
              </motion.span>
              <motion.p className="mt-1 text-gray-300 lg:hidden" variants={itemVariants}>
                ✉️ pswayamprabha@gmail.com
              </motion.p>
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://drive.google.com/file/d/1ajwBlMnpktuBlhBS_t8Afsa5GGCYRI3a/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

