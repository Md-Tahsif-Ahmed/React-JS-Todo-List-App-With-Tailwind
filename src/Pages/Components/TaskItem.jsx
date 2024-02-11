import { useState } from "react";

const TaskItem = ({ task, toggleTaskStatus }) => {
 
  const [title, setTitle] = useState(task.title);
  
  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };
 
 return (  
      <div className="space-x-6 space-y-3 ">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title} </span>
      <button onClick={handleToggleStatus} className="btn btn-success btn-xs">
          {task.completed ? 'Incomplete' : 'Complete'}
        </button>
      </div>
      
   

  );
};

export default TaskItem;
