import React from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'



const TaskList = () => {

  const {tasks} = useSelector(state => state.taskReducer)
  return (
  <div>
    <ol>
      {tasks?.map((task) => (
        
        <Task task={task} key={task.id}/>
      ))}
      </ol>
      </div>
  )
}

export default TaskList