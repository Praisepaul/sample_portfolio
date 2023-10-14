import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Multimedia Forensics Using Cloud</h3>
        <p>Image forgery detection is a critical area of research in digital image forensics. This project 
            presents an enhanced Image Forgery Detection system that incorporates Copy-Move Forgery Detection 
            to address the challenges posed by various image manipulation techniques. The proposed system combines 
            metadata analysis, geometric transformation analysis, and block-based analysis to detect potential 
            forgeries. The project aims to develop an Image Forgery Detection system that utilizes enhanced forgery 
            detection techniques along with Copy-Move Forgery Detection.</p>
      </div>
      <div className="project">
        <h3>AI Based Exam Portal</h3>
        <p>As a key contributor to the development of the AI-Based Online Proctoring Exam Portal for Universities, 
            I played a pivotal role in creating a cutting-edge solution that enhances the efficiency, security, and 
            accessibility of online examinations. This project sought to address the evolving needs of educational 
            institutions by harnessing the power of artificial intelligence (AI) to detect malpractice, thereby ensuring
             the integrity of assessments. Technologies such as ReactJS, NodeJS, MySQL, Tensor Flow and other APIs were 
             used during the implementation. I was the project lead and directly reported to project in-charge.</p>
      </div>
    </section>
  );
}

export default Projects;
