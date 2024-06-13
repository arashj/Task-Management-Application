import { useContext, createContext, useState } from "react";
import { MdHome } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TbCalendarDue } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import SortBy from "./SortBy";

export default function ProjectSidebar({
  tasksState,
  setTasksState,
  setFilter,
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  let cssClasses = (filter) => {
    return `
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          activeFilter === filter
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray- 600"
        }
    `;
  };

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <h1 className="text-4xl font-bold text-center my-4">Task Manager</h1>

        <ul className="flex-1 px-3">
          <li className={cssClasses("all")}>
            <MdHome />
            <button
              className="overflow-hidden transition-all w-52 ml-3"
              onClick={() => {
                handleFilterClick("all");
              }}
            >
              All tasks
            </button>
          </li>

          <li className={cssClasses("completed")}>
            <FaCheck />
            <button
              className="overflow-hidden transition-all w-52 ml-3"
              onClick={() => {
                handleFilterClick("completed");
              }}
            >
              Completed
            </button>
          </li>

          <li className={cssClasses("incomplete")}>
            <MdPendingActions />
            <button
              className="overflow-hidden transition-all w-52 ml-3"
              onClick={() => handleFilterClick("incomplete")}
            >
              Pending
            </button>
          </li>

          <SortBy tasksState={tasksState} setTasksState={setTasksState} />
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${"w-52 ml-3"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">name</h4>
              <span className="text-xs text-gray-600">
                email.address@gmail.com
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
