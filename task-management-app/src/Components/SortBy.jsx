/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const sortOptions = [
  { title: "title", property: "title" },
  { title: "date", property: "dueDate" },
];

const sortByProperty = (prop, order = 1) => {
  if (order !== -1) order = 1;
  return (a, b) => {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] < b[prop]) return -1;
    return 0;
  };
};

export default function SortBy({ tasksState, setTasksState }) {
  const [sortType, setSortType] = useState(sortOptions[0]);

  useEffect(() => {
    if (!tasksState.tasks) {
      return; // Exit early if tasksState.tasks is undefined or null
    }
    const newTasks = [...tasksState.tasks].sort(
      sortByProperty(sortType.property)
    );
    console.log("new tasks", newTasks);
    setTasksState((prevTasksState) => ({
      ...prevTasksState,
      tasks: newTasks,
    }));
  }, [sortType]);

  const changeSortType = (e) => {
    const selectedType = sortOptions.find(
      (type) => type.title === e.target.value
    );
    //console.log(`Picked sort type is ${e.target.value}`)
    setSortType(selectedType);
  };

  return (
    <div className="relative inline-block w-full">
      <select
        onChange={changeSortType}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {sortOptions.map(({ title, value }, index) => (
          <option key={index} value={value}>
            {title}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
  //   return (
  //     <select onChange={changeSortType}>
  //       {sortOptions.map(({ title }, index) => {
  //         return <option key={index}>{title}</option>;
  //       })}
  //     </select>
  //   );
}
