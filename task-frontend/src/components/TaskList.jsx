import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { deleteTask } from '../services/taskService';

function TaskList() {
  const { tasks, fetchTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
            <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
