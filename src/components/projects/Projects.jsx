import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: "Chrome Extension for Lead Categorization",
    description: "A Chrome extension that automates lead suggestions and categorization.",
    techStack: ["JavaScript", "Hugging Face API"],
    link: "#",
    image: "/lovable-uploads/5dc4310b-91b6-411d-af0c-1f23277cba8e.png"
  },
  {
    id: 2,
    title: "Flavours Find - Recipe Discovery App",
    description: "An interactive recipe app that helps users discover meals based on ingredients, mood, cooking time, and cuisine..",
    techStack: ["React.js", "Tailwind CSS", "TheMealDB API"],
    link: "https://flavours-findss.vercel.app/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills and projects.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  }
];

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="page-container">
     

      <section className="projects-section" id="projects">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            Explore my latest work and technical projects that demonstrate my skills and passion.
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`project-image ${hoveredProject === project.id ? 'hovered' : ''}`}
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>

                <div className="project-footer">
                  <div className="tech-stack">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="project-link"
                  >
                    View Project
                    <ArrowRight size={16} className={`arrow-icon ${hoveredProject === project.id ? 'arrow-hovered' : ''}`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="view-all-container">
          <a href="#" className="view-all-button">
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default Project;
