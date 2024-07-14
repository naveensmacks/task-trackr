import { useTasksContext } from "../lib/hooks";

export default function Counter() {
  const { tasks } = useTasksContext();
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  return (
    <p className="ml-auto">
      <b>{completedTasks}</b>/{totalTasks} task
      {totalTasks === 1 ? "" : "s"} completed
    </p>
  );
}
