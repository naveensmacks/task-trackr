import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContextProvider";

export function useTasksContext() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error(
      "useTasksContext must be used within an TasksContextProvider"
    );
  }
  return context;
}
