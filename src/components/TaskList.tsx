import EmptyView from "./EmptyView";
import { TaskType } from "../lib/types";
import { useTasksContext } from "../lib/hooks";

export default function TaskList() {
  const { tasks, handleToggleTask, handleDeleteTask } = useTasksContext();
  return (
    <ul className="mb-0 mt-4 max-h-[288px] md:max-h-[560px] overflow-auto">
      {tasks.length === 0 && <EmptyView />}

      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        );
      })}
    </ul>
  );
}

type TaskProps = {
  task: TaskType;
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
};

function Task({ task, onToggleTask, onDeleteTask }: TaskProps) {
  return (
    <li className="flex justify-between w-[330px] lg:w-[450px] mr-4 mx-2">
      <label
        className="flex items-center gap-2 w-[90%] bg-gamma p-2 hover:scale-105 transition-transform duration-500 hover:cursor-pointer m-1"
        onClick={(e) => {
          onToggleTask(task.id);
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <input
          type="checkbox"
          onClick={(e) => {
            onToggleTask(task.id);
            e.stopPropagation();
          }}
          onChange={(e) => e.stopPropagation()}
          checked={task.completed}
        />
        <span>{task.name}</span>
      </label>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="hover:scale-125 transition-transform duration-500"
      >
        ❌
      </button>
    </li>
  );
}
