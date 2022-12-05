import React from 'react';
import ProjectTask from './ProjectTask';
import HeaderContainer from './HeaderContainer';

const Projects = () => {
  return (
    <div className='projects-container'>
          <HeaderContainer title={'Projects'} />   
        <ProjectTask />

    </div>
  )
}

export default Projects