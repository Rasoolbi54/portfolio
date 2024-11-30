import React from 'react';
import './Projects.css'; // Ensure you create the CSS for styling

const projects = [
  // {
  //   title: 'Hire Scope - Job Application Tracker',
  //   description: 'A web-based platform that helps users manage and prioritize job applications.',
  //   techStack: 'React.js, Firebase, CSS',
  //   features: [
  //     'Application tracking and status updates',
  //     'Resume and cover letter storage',
  //     'Automated reminders',
  //     'Job prioritization with search integrations',
  //   ],
  //   link: '#', // Add project link
  // },
  // {
  //   title: 'Mobile Service App',
  //   description: 'A service platform for booking doorstep mobile repairs and services.',
  //   techStack: 'React.js, Material UI, PWA',
  //   features: [
  //     'Service selection and cost estimation',
  //     'Doorstep service scheduling',
  //     'PWA for offline access and mobile responsiveness',
  //   ],
  //   link: '#', // Add project link
  // },
  {
    title: 'Chrome Extension for Lead Categorization',
    description: 'A Chrome extension that automates lead suggestions and categorization.',
    techStack: 'JavaScript, Hugging Face API',
    features: [
      'AI-driven lead categorization',
      'Content analysis with automated suggestions',
      'Chrome notifications for new leads',
    ],
    link: 'https://chrome-extension-theta-nine.vercel.app/', // Add project link
  },
  {
    title: 'Flavours Find - Recipe Discovery App',
    description: "Flavours Find is an intuitive and interactive recipe discovery application that allows users to explore a wide range of meal options based on ingredients, moods, cooking times, and cuisines. Whether you're looking for comfort food, healthy meals, or quick snacks, this app provides a seamless experience to find your next favorite recipe. It includes features like searching by meal name or ingredients, saving favorite recipes, and browsing through curated meal categories.",
    techStack: 'React.js, Tailwind CSS , TheMealDB API',
    features: [
      'Search recipes by ingredient or meal name.',
      'Save your favorite recipes for quick access.',
      'Responsive design for mobile and desktop',
    ],
    link: 'https://flavours-findss.vercel.app/', // Add project link
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id='projects'>
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
