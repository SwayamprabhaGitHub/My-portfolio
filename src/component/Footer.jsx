import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, LucideGithub } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="pt-24 pb-6 bg-gradient-to-b from-black via-gray-950 to-blue-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center ">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text end space-x-4 mt-1">
          <a href="https://www.linkedin.com/in/swayamp2602/">
            <LinkedinIcon className="inline-block" />
          </a>
          <a href="https://github.com/SwayamprabhaGitHub">
            <LucideGithub className="inline-block" />
          </a>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Swayamprabha Priyadarsini. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;

