import React, { useState } from "react";
import styles from "./styles.module.css";
import { BiCheck, BiEdit, BiTrash } from 'react-icons/bi';
import { deleteTask, toggleDone, editTask } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Task = ({task}) => {

  
// const [taskDone,setTaskDone] = useState()
const [editMode,setEditMode] =useState(false);
const [newName,setNewName] = useState();

const dispatch = useDispatch()


  const handleDelete = () => {
    dispatch(deleteTask(task.name));
  };

  function HandleDone(task) {
    
    dispatch(toggleDone(task))
  }

  function HandleEdit(task) {
    dispatch(editTask(task, newName))
    setEditMode(!editMode)
  }

  return (
    <li className={styles.taskItem}>
      
     {
       editMode ? (
         <div className={styles.EditMode}>
        <input type="text" onChange={(e) => setNewName(e.target.value)} defaultValue={task.name}/>
        <button onClick={() => HandleEdit(task)}>Save</button>
        <button onClick={() => setEditMode(!editMode)}>Cancel</button>
      </div>
     )
     
     
     
     
     :<><div style={{ textDecoration: task?.done ? "line-through" : "none" }}
       className={styles.taskItemName}>{task?.name}</div> 
      <div className={styles.taskItemActions}>
        <button className={styles.taskItemAction} onClick={() =>HandleDone(task) } >
          <BiCheck />
        </button>
        <button className={styles.taskItemAction} onClick={() =>setEditMode(!editMode)}>
          <BiEdit />
        </button>
        <button className={styles.taskItemAction} onClick={() => handleDelete(task.name)}>
          <BiTrash />
        </button>
      </div>
      </>}
    </li>
  );
};

export default Task;
