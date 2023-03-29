import * as TASK_CONSTANTS from "./constants"

const initialState = {
    tasks: [],
 };


 const taskReducer = (state = initialState, action) =>{
switch (action.type) {
    case TASK_CONSTANTS.ADD_TASK:
        return{
            ...state,
            tasks : [...state.tasks , {name : action.payload, done: false , id: crypto.randomUUID}]
        };   

    case TASK_CONSTANTS.DELETE_TASK:
        const filtering = state.tasks?.filter((task) => task.name !== action.payload);
        return { tasks: filtering }

    case TASK_CONSTANTS.CROSSED_TASK:
        return {
            ...state,
            tasks: state.tasks?.map((task) => (
                task.name === action.payload.name ? {...action.payload , done:true} : task
            ))
          };

    case TASK_CONSTANTS.UPDATE_TASK:
        return {
            ...state,
            tasks: state.tasks?.map((task) => (
                task.id === action.payload.task.id ? {...action.payload.task ,name:action.payload.newName } : task
            ))
        }
        
        default:
        return state;
}
 }


 export default taskReducer;