import TaskItem from './TaskItem';

const TaskList = ({tasks}) => {
  return (
    <div className='text-center my-10'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
           
        />
      ))}
    </div>
  );
};

export default TaskList;