import React from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'



const TaskList = () => {

  const {tasks} = useSelector(state => state)


  return (
  <div>
    <ol>
      {tasks?.map((task, index) => (
        <Task task={task} key={index}/>
      ))}
      </ol>
      </div>
  )
}

export default TaskList