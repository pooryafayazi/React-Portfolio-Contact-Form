import React from 'react';
import data from './projects.json';
import ProjectCard from '../ProjectCard/ProjectCard';


const Projects = () => {
  return (
    <section>
      <h2>نمونه‌کارها</h2>
      <p className="muted">برخی پروژه‌های اخیر در نمایندگی کاویانی و شخصی.</p>
      <div className="grid">
        {data.map((item) => <ProjectCard key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default Projects;