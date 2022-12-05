import React from 'react'
import HeaderContainer from './HeaderContainer';
import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <div className='tasks-container'>
        <HeaderContainer title={'Tasks'} />   
        {tasks.map( task => (
             <Task key={task.id}
                   task={task} />
        ))}
        
    </div>
  )
}

export default Tasks;