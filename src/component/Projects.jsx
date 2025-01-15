import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import ProjectModal from './ProjectModal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reactImg from '../assets/reactImg.svg';
import reduxImg from '../assets/reduxImg.svg';
import tailwindImg from '../assets/tailwindImg.svg';
import MailHubImg from '../assets/MailHub.png';
import SpendWiseImg from '../assets/SpendWiseImg.png';
import RestaurantAppImg from '../assets/RestaurantAppImg.png';
import TrendTroveImg from '../assets/TrendTroveImg.png';
import htmlImg from '../assets/htmlImg.svg';
import cssImg from '../assets/cssImg.svg';
import javascriptImg from '../assets/javascriptImg.svg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MailHub",
      description: "Developed an email management system featuring Firebase authentication with support for Google sign-in, email/password login, and password recovery, ensuring secure access for users. The system utilized Firestore for user-specific data storage and dynamic data retrieval, with login states persisting across page refreshes for an enhanced user experience. Key functionalities included a mail composition module for creating, sending, and managing emails, and categorized views for inbox, sent, starred, trash, and all mails. Integrated search functionality to streamline email retrieval and a profile management feature for users to update their details. Improved navigation with pagination and batch processing for actions like moving multiple emails to trash, and introduced a 'Delete for everyone' feature for email deletion on both sender and recipient ends, inspired by WhatsApp.",
      image: MailHubImg,
      githubLink: "https://github.com/SwayamprabhaGitHub/mailhub.git",
      websiteLink: "https://mailhub-sigma.vercel.app/",
      technologies: [
        { name: "React", icon: <img src= {reactImg} className='w-4 h-4' /> },
        { name: "Redux", icon: <img src= {reduxImg} className='w-4 h-4' /> },
        { name: "Tailwind CSS", icon: <img src= {tailwindImg} className='w-4 h-4' /> },
        { name: "Firebase", icon: <img src= "https://www.svgrepo.com/show/353735/firebase.svg" className='w-4 h-4' /> },
      ]
    },
    {
      title: "TrendTrove",
      description: "Developed a feature-rich e-commerce website leveraging Firebase Authentication for secure user and admin login with persistent states and role-based protected routes. Integrated Firestore for dynamic data retrieval and storage, with dedicated user and admin dashboards to manage orders, products, and user details efficiently. Implemented advanced features like category-based product navigation, search with pagination, a responsive product page with an image slider, and Razorpay integration for secure payments. Enhanced user experience with a light/dark mode toggle, a mobile-friendly layout, and seamless cart and address management. Utilized Context API and Redux for scalable global state management across the platform.",
      image: TrendTroveImg,
      githubLink: "https://github.com/Code-with-S-G/trend_trove.git",
      websiteLink: "https://trendztrove.netlify.app/",
      technologies: [
        { name: "React", icon: <img src= {reactImg} className='w-4 h-4' /> },
        { name: "Redux", icon: <img src= {reduxImg} className='w-4 h-4' /> },
        { name: "Tailwind CSS", icon: <img src= {tailwindImg} className='w-4 h-4' /> },
        { name: "Firebase", icon: <img src= "https://www.svgrepo.com/show/353735/firebase.svg" className='w-4 h-4' /> },
      ]
    },
    {
      title: "SpendWise",
      description: "Developed a responsive web application for tracking daily expenses, empowering users to monitor and manage their financial habits effectively. Integrated Firebase Authentication to ensure secure user sign-up, login, and password recovery. The application featured dynamic forms for adding, editing, and managing expenses, with an option to export data as CSV files for convenient record-keeping. A profile card was designed to allow seamless updates to personal details, complemented by interactive modals displaying success messages, errors, and alerts to enhance the user experience. Leveraged Redux Toolkit for centralized and scalable state management, ensuring smooth and efficient functionality throughout the application.",
      image: SpendWiseImg,
      githubLink: "https://github.com/SwayamprabhaGitHub/spendwise.git",
      websiteLink: "https://spendwise-mu.vercel.app/",
      technologies: [
        { name: "React", icon: <img src= {reactImg} className='w-4 h-4' /> },
        { name: "Redux", icon: <img src= {reduxImg} className='w-4 h-4' /> },
        { name: "Tailwind CSS", icon: <img src= {tailwindImg} className='w-4 h-4' /> },
        { name: "Firebase", icon: <img src= "https://www.svgrepo.com/show/353735/firebase.svg" className='w-4 h-4' /> },
      ]
    },
    {
      title: "Restaurant-app",
      description: "Utilized Context API for state management, ensuring efficient data flow and component communication. Designed a visually appealing UI with Vanilla CSS, focusing on user interface design principles. Implemented cart functionality, allowing users to add and remove items dynamically.",
      image: RestaurantAppImg,
      githubLink: "https://github.com/SwayamprabhaGitHub/restaurant-app.git",
      websiteLink: "https://restaurant-app-one-peach.vercel.app/",
      technologies: [
        { name: "HTML", icon: <img src= {htmlImg} className='w-4 h-4' /> },
        { name: "Vanila CSS", icon: <img src= {cssImg} className='w-4 h-4' /> },
        { name: "JavaScript", icon: <img src= {javascriptImg} className='w-4 h-4' /> },
        { name: "React", icon: <img src= {reactImg} className='w-4 h-4' /> },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <motion.section
      id="projects"
      className="pt-20 bg-gradient-to-b from-black via-gray-950 to-cyan-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 border-b pb-3 text-center bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Projects
        </motion.h2>
        <motion.div variants={containerVariants}>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="px-2"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-black via-cyan-950 to-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 md:h-60 object-fit" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-pink-400">{project.title}</h3>
                    <p className="text-gray-300 mb-5 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                  {tech.icon}
                  <span className="ml-2 text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                      whileHover={{ scale: 1.10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{type: 'spring', stiffness: 500}}
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
};

export default Projects;

