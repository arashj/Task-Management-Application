import { useEffect } from "react";
import TaskItem from "./TaskItem";

/* eslint-disable react/prop-types */
export default function Tasklist({
  title,
  onDeleteTask,
  onUpdateTask,
  onAddTask,
  filteredTasks,
}) {
  console.log("Tasklist: ");
  const header = () => {
    if (title === "completed") return "Completed";
    if (title === "pending") return "Pending";
    if (title === "Overdue") return "Overdue";
    if (title === "all") return "All Tasks";
  };
  return (
    <main className="relative p-8 w-full border-2 rounded-lg h-full overflow-y-auto">
      <h1 className="text-2xl font-extrabold relative mb-8">
        {header()}
        <span className="absolute bottom-[-0.5rem] left-0 w-12 h-[0.2rem] rounded-md bg-green-500"></span>
      </h1>

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.dueDate}
            isCompleted={task.isCompleted}
            id={task.id}
            deleteTask={onDeleteTask}
            onUpdate={onUpdateTask}
          />
        ))}

        <button
          className="flex items-center justify-center gap-2 h-64 my-4 font-semibold cursor-pointer rounded-lg border-2 border-dashed border-gray-400 transition-all duration-300 ease-in-out"
          onClick={onAddTask}
        >
          Add New Task
        </button>
      </div>
    </main>
  );
}
