import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-sec' id='about'>
        <div className='about'>
          <h2>HI! I'm Rasool Bi</h2>
            <div>

                <p>
               A certified Full Stack Developer with expertise in frontend technologies such as JavaScript, React.js, HTML, and CSS. I specialize in creating responsive, user-friendly web applications and have developed
                interactive project Chrome extensions. My skill set extends to backend development with Node.js, allowing me to deliver complete solutions as a full-stack developer.
                </p>

                <p>
                Passionate about crafting dynamic, efficient websites, I also enjoy traveling, spending time with loved ones, and staying updated on the latest tech trends. My long-term goal is to grow in the tech industry and eventually run my own business.
                </p>
            </div>
        </div>

       
        <div class="skills_sec">
                <h4>My Skills</h4>
                <div class="skills">
                    <div class="skills_skill">Html</div>
                    <div class="skills_skill">CSS</div>
                    <div class="skills_skill">Bootstrap</div>
                    <div class="skills_skill">JavaScript</div>
                    <div class="skills_skill">React </div>
                    <div class="skills_skill">Material UI</div>
                   
                </div>
                <div class="skills">
                   <div class="skills_skill">Redux</div>
                    <div class="skills_skill">Node JS</div>
                    <div class="skills_skill">Express JS</div>
                    <div class="skills_skill">MongoDB</div>

                </div>
            </div>

    </div>
  )
}

export default About
