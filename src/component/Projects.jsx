import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import ProjectModal from './ProjectModal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MailHubImg from '../assets/MailHub.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MailHub",
      description: 'Built MailHub, an email management system with Firebase authentication (Google and email/password) and password recovery. Integrated Firestore for user-specific data storage and dynamic retrieval based on login state.•	Developed core features like email composition, categorized views (inbox, trash, starred, etc.), and search functionality. Implemented advanced email management, including batch actions, "Delete for everyone," and read/unread indicators. Enhanced user experience with persistent login, profile management, and paginated email navigation. Developed MailHub using React, Tailwind CSS, Firebase and Redux for global state management, focusing on scalability and core functionality.',
      image: MailHubImg,
      githubLink: "https://github.com/yourusername/project1",
      websiteLink: "https://project1-demo.com",
      technologies: [
        { name: "React", icon: <Code className="w-4 h-4" /> },
        { name: "Node.js", icon: <Code className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Code className="w-4 h-4" /> },
      ]
    },
    {
      title: "Project 2",
      description: "Project 2 is a mobile-first web application built with React Native and Firebase. It demonstrates my ability to create cross-platform mobile apps with a robust backend.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/yourusername/project2",
      websiteLink: "https://project2-demo.com",
      technologies: [
        { name: "React Native", icon: <Code className="w-4 h-4" /> },
        { name: "Firebase", icon: <Code className="w-4 h-4" /> },
        { name: "Redux", icon: <Code className="w-4 h-4" /> },
      ]
    },
    {
      title: "Project 3",
      description: "Project 3 is a data visualization dashboard created with D3.js and Vue.js. It showcases my skills in frontend development and data representation.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/yourusername/project3",
      websiteLink: "https://project3-demo.com",
      technologies: [
        { name: "Vue.js", icon: <Code className="w-4 h-4" /> },
        { name: "D3.js", icon: <Code className="w-4 h-4" /> },
        { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
      ]
    },
    {
      title: "Project 4",
      description: "Project 4 is an e-commerce platform built with Next.js and Stripe integration. It demonstrates my ability to create performant and scalable web applications with secure payment processing.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/yourusername/project4",
      websiteLink: "https://project4-demo.com",
      technologies: [
        { name: "Next.js", icon: <Code className="w-4 h-4" /> },
        { name: "Stripe", icon: <Code className="w-4 h-4" /> },
        { name: "PostgreSQL", icon: <Code className="w-4 h-4" /> },
      ]
    },
    {
      title: "Project 5",
      description: "Project 5 is a machine learning-powered chatbot using Python and TensorFlow. It showcases my skills in AI and natural language processing, providing intelligent responses to user queries.",
      image: "https://via.placeholder.com/300x200",
      githubLink: "https://github.com/yourusername/project5",
      websiteLink: "https://project5-demo.com",
      technologies: [
        { name: "Python", icon: <Code className="w-4 h-4" /> },
        { name: "TensorFlow", icon: <Code className="w-4 h-4" /> },
        { name: "Flask", icon: <Code className="w-4 h-4" /> },
      ]
    }
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
      className="pt-20 bg-gradient-to-b from-black via-gray-950 to-cyan-950"
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

