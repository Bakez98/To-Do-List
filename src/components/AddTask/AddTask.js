import React, { useState } from 'react'
import styles from "./styles.module.css";

import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';

const AddTask = () => {

  const [taskName, setTaskName] = useState();
  const dispatch = useDispatch();

  function handleAddTask(taskName) {
    if(taskName)
    {
    dispatch(addTask(taskName))
  }else
  {
    alert("Please Enter Task Name")
  }
  }  

  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder='Enter Your Task..' onChange={(e) => setTaskName(e.target.value)}/>
      <button onClick={() =>handleAddTask(taskName)}>Add Task</button>
    </div>
  )
}

export default AddTask