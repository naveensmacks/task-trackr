import React, { createContext, useEffect, useState } from "react";
import { initialTasks } from "../lib/constants";
import { TaskType } from "../lib/types";
type TasksContextType = {
  tasks: TaskType[];
  handleAddTask: (inputValue: string) => void;
  handleDeleteTask: (taskId: number) => void;
  handleToggleTask: (taskId: number) => void;
} | null;
export const TasksContext = createContext<TasksContextType>(null);
export default function TasksContextProvider({
  children,
}: React.PropsWithChildren) {
  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage: TaskType[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    return tasksFromLocalStorage || initialTasks;
  });

  const handleAddTask = (inputValue: string) => {
    const newTask = {
      id: Date.now(),
      name: inputValue,
      completed: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleToggleTask = (taskId: number) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    console.log("newTasks: ", newTasks);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleDeleteTask,
        handleToggleTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
