import React, { createContext, useState, useEffect } from 'react';
import { getTasks } from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
