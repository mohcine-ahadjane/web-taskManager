package com.example.task_backend.services;

import com.example.task_backend.entities.Task;

import java.util.List;

public interface TaskService {
    Task createTask(Task task);
    Task getTaskById(Long id);
    Task updateTask(Task task);
    List<Task> getAllTasks();
    void deleteTask(Long id);
}
