import React from 'react';
import Projects from './Projects';
import Tasks from './Tasks';


const Planner = ({ tasks }) => {
  return (
    <div className='container'>
        <Tasks tasks = { tasks } />
        <Projects />

    </div>
  )
}

export default Planner