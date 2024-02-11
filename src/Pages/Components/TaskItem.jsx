import { useState } from "react";

const TaskItem = ({ task, toggleTaskStatus, deleteTask }) => {
 
  const [title, setTitle] = useState(task.title);
  
  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const priorityColors = {
    low: 'green',
    medium: 'orange',
    high: 'red'
  };

  const priorityStyles = {
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    backgroundColor: priorityColors[task.priority],
    display: 'inline-block',
    marginRight: '8px'
  };
 
 return (  
      <div className="space-x-6 space-y-3 ">
        <span style={priorityStyles}></span>
        <span>{task.priority} </span>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title} </span>
        <button onClick={handleToggleStatus} className="btn btn-success btn-xs">
            {task.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
      </div>
      
   

  );
};

export default TaskItem;
