import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, getTask, updateTask } from '../services/taskService';

function TaskForm() {
  const [task, setTask] = useState({ title: '', description: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      getTask(id).then((res) => setTask(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{isEdit ? 'Update' : 'Add'} Task</button>
    </form>
  );
}

export default TaskForm;