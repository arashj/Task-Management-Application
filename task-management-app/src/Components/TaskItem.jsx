/* eslint-disable react/prop-types */
"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";

function TaskItem({
  title,
  description,
  date,
  id,
  deleteTask,
  onUpdate,
  isCompleted,
}) {
  const [editing, setEditing] = useState(false);

  // Function to determine if a task is overdue
  const isOverdue = (dueDate) => {
    const today = new Date();
    const taskDueDate = new Date(dueDate);
    return taskDueDate < today;
  };

  // Determine the display status based on overdue condition
  const displayStatus = isOverdue(date) ? "Overdue" : isCompleted;

  // Determine text color based on status
  const statusColor = displayStatus === "Overdue" ? "text-red-600" : "";

  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateDate, setUpdateDate] = useState(date);
  const [updateIsCompleted, setUpdateIsCompleted] = useState(isCompleted);

  const handleEditing = () => {
    setEditing(true);
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
      // Call onUpdate for all fields
      onUpdate(
        id,
        updateTitle,
        updateDescription,
        updateDate,
        updateIsCompleted
      );
    }
  };

  const handleChangeTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setUpdateDescription(e.target.value);
  };

  const handleChangeDate = (e) => {
    setUpdateDate(e.target.value);
  };

  const handleToggleIsCompleted = () => {
    setUpdateIsCompleted((prevUpdateIsCompleted) => {
      const newIsCompleted = !prevUpdateIsCompleted;

      // Log the new state value for debugging
      console.log("updateIsCompleted", newIsCompleted);

      // Call the onUpdate function with the new state value
      onUpdate(id, updateTitle, updateDescription, updateDate, newIsCompleted);

      // Return the new state value
      return newIsCompleted;
    });
  };

  return (
    <div className="p-6 rounded-xl bg-gray-200 shadow-lg border-2 border-gray-200 flex flex-col gap-2 h-64 my-4">
      {editing ? (
        <>
          <input
            type="text"
            value={updateTitle}
            onChange={handleChangeTitle}
            onKeyDown={handleUpdatedDone}
          />
          <textarea
            type="text"
            value={updateDescription}
            onChange={handleChangeDescription}
            onKeyDown={handleUpdatedDone}
          />
          <input
            type="date"
            value={updateDate}
            onChange={handleChangeDate}
            onKeyDown={handleUpdatedDone}
          />
        </>
      ) : (
        <>
          <h1 className={`text-xl font-semibold ${statusColor}`}>{title}</h1>
          <p className={`border p-4 mb-4 rounded ${statusColor}`}>
            {description}
          </p>
          <p className="mt-auto">{formattedDate}</p>
        </>
      )}

      <div className="flex items-center gap-3">
        <ToggleButton
          isCompleted={updateIsCompleted}
          onToggle={handleToggleIsCompleted}
          isOverdue={isOverdue(date)}
        />
        <button className="ml-auto text-gray-400" onClick={handleEditing}>
          <CiEdit />
        </button>
        <button
          className="text-gray-400"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
