import React from "react";
import "./About.css";

function About() {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React",
      "Material UI",
    ],
    backend: ["PostgreSQL", "Node JS", "Express JS", "MongoDB"],
    tools: ["VS Code", "GitHub", "Postman", "Git"],
  };
  return (
    <div className="about-sec" id="about">
      <div className="about">
        <h2>HI! I'm Rasool Bi</h2>
       <div className="about-grid">
       <div>
          <img src="./about.png"/>
        </div>
       <div>
          <p>
            I'm a certified Full Stack Developer with expertise in frontend
            technologies such as JavaScript, React.js, HTML, and CSS. I
            specialize in creating responsive, user-friendly web applications
            and have developed interactive Chrome extensions. My skill set also
            extends to backend development using Node.js, allowing me to deliver
            complete end-to-end solutions.
          </p>

          <p>
            I've worked on projects ranging from e-commerce platforms to
            productivity tools, and I’m proficient with tools and environments
            like Git, MongoDB, VS Code, and deployment platforms such as Vercel
            and Heroku.
          </p>

          <p>
            Passionate about crafting dynamic and efficient websites, I also
            enjoy traveling, spending time with loved ones, and staying updated
            on the latest tech trends. My long-term goal is to grow in the tech
            industry and eventually run my own business.
          </p>
        </div>

       
       </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-title">My Skills</h2>

        <div className="skills-container">
          <div className="skills-box">
            <h3 className="box-title">Frontend</h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3 className="box-title">Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skills-box">
            <h3 className="box-title">Tools</h3>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
