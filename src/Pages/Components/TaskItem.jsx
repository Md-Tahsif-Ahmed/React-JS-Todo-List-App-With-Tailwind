import { useState } from "react";

const TaskItem = ({ task }) => {
 
  const [title, setTitle] = useState(task.title);
 
 return (  
      <div className="space-x-6 space-y-3 ">
      <span>{task.title} </span>
      </div>
      
   

  );
};

export default TaskItem;
