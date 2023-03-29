import * as TASK_CONSTANTS from "./constants"

export  function addTask(taskName) {
    return (dispatch) => {
        
        dispatch({
            type:TASK_CONSTANTS.ADD_TASK,
            payload:taskName,
        })

    }
    
}

export function deleteTask(taskName){
    return (dispatch) => {

        dispatch({
            type: TASK_CONSTANTS.DELETE_TASK,
            payload:taskName,
        })
    }

}


export function toggleDone(task){
    return (dispatch) => {

        dispatch({
            type:TASK_CONSTANTS.CROSSED_TASK,
            payload:task,
        })
    }
}


export function editTask(task,newName) {
    return (dispatch) => {

        dispatch({
            type:TASK_CONSTANTS.UPDATE_TASK,
            payload:{task,newName}
        })
    }
}