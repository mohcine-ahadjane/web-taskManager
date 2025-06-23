package com.example.task_backend.services;

import com.example.task_backend.entities.Task;
import com.example.task_backend.exceptions.ResourceNotFoundException;
import com.example.task_backend.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with id " + id));
    }

    @Override
    public Task updateTask(Task task) {
        if (!taskRepository.existsById(task.getId())) {
            throw new ResourceNotFoundException("Cannot update. Task not found with id " + task.getId());
        }
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new ResourceNotFoundException("Cannot delete. Task not found with id " + id);
        }
        taskRepository.deleteById(id);
    }
}
