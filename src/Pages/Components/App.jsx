import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
const App = () => {
    const [tasks, setTasks] = useState([]);
    // Add Task
    const addTask = (title, priority) => {
        const newTask = {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          title,
          priority,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      };
    return (
        <div className='space-y-4'>
      <h1 className='text-2xl text-center font-medium my-10'>Todo List App</h1>
       
       
      <TaskForm onSubmit={addTask} />
      <TaskList
         tasks={tasks}
      />
       
      </div>
    
    );
};

export default App;