import { useState } from "react";
import Button from "./Components/Button";
import NoTaskCreated from "./Components/NoTaskCreated";
import ProjectSidebar from "./Components/ProjectSidebar";
import "./index.css";
import NewTask from "./Components/NewTask";
import Tasklist from "./Components/Tasklist";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasksState.tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "incomplete") return !task.isCompleted;
    return true; // 'all' or any other value will show all tasks
  });

  function handleDeleteTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const handleUpdateTask = (
    id,
    updateTitle,
    updateDescription,
    updateDate,
    updateIsCompleted
  ) => {
    setTasksState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: updateTitle,
            description: updateDescription,
            dueDate: updateDate,
            isCompleted: updateIsCompleted,
          };
        }
        return task;
      }),
    }));
  };

  function handleAddTask(projectData) {
    setTasksState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        ...projectData,
        id: taskId,
      };
      return {
        ...prevState,
        selectedTaskId: "listed",
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleCancelAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }

  function handleStartAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  let content = (
    <Tasklist
      tasks={tasksState.tasks}
      onDeleteTask={handleDeleteTask}
      onUpdateTask={handleUpdateTask}
      onAddTask={handleStartAddTask}
      filteredTasks={filteredTasks}
    />
  );

  if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskCreated onStartAddTask={handleStartAddTask} />;
  } else if (tasksState.selectedTaskId === null) {
    content = (
      <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} task="" />
    );
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          tasksState={tasksState}
          setTasksState={setTasksState}
          setFilter={setFilter}
        />
        {content}
      </main>
    </>
  );
}

export default App;
