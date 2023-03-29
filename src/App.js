
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';


function App() {
  return (
    <div className="App">
      <div><h1>My To Do List </h1></div>
      <div>
      <AddTask/>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
