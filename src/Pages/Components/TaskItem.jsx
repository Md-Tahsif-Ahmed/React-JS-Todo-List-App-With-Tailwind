import { useState } from "react";

const TaskItem = ({ task, toggleTaskStatus, deleteTask, editTask }) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [priority, setPriority] = useState(task.priority);
  
    const handleToggleStatus = () => {
        toggleTaskStatus(task.id);
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSaveEdit = () => {
        editTask(task.id, title, priority);
        setEditing(false);
    };

    const handleCancelEdit = () => {
        setTitle(task.title);
        setPriority(task.priority);
        setEditing(false);
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
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
    <div className="">
    {
    editing ? (
    <div className="space-x-2 space-y-3 ">
    
      <input type="text" value={title} onChange={handleChange} placeholder="Enter Task Title" className="input input-bordered input-sm w-1/4 lg:w-full max-w-xs" />
     
      <select value={priority} onChange={handlePriorityChange} className="select select-bordered select-sm w-1/4 lg:w-full max-w-xs">
        <option disabled selected>Select one</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
      <button onClick={handleSaveEdit} className='btn btn-success btn-sm'>Save</button>
      <button onClick={handleCancelEdit} className='btn btn-warning btn-sm'>Cancel</button>
    </div>
  ) : (  
  
  <div className="space-x-6 space-y-3 ">
        <span style={priorityStyles}></span>
        <span>{task.priority} </span>
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title} </span>
        
        <button onClick={handleToggleStatus} className="btn btn-success btn-xs">
        {task.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button onClick={handleEdit} className="btn btn-info btn-xs">Edit</button>
        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
    
    
  </div>
    )
}
</div>
      
   

  );
};

export default TaskItem;
