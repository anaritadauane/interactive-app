import React from 'react'

const Task = ({ task }) => {
  return (
            <div className="task">
                <h4>{task.text}</h4>
                <p>{task.date + ' at ' + task.time + '.'}</p>
            </div>
  
  )
}

export default Task