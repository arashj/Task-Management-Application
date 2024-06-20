/* eslint-disable react/display-name */

const ToggleButton = ({ isCompleted, onToggle, isOverdue }) => {
  console.log("in ToggleButton: ", isCompleted);
  return (
    <>
      {!isOverdue ? (
        <button
          className={`px-4 py-2 rounded-full text-white ${
            isCompleted ? "bg-green-600" : "bg-red-600"
          }`}
          onClick={onToggle}
        >
          {isCompleted ? "Completed" : "Pending"}
        </button>
      ) : (
        <button
          className="px-4 py-2 rounded-full text-white bg-gray-800"
          disabled
        >
          Overdue
        </button>
      )}
    </>
  );
};

export default ToggleButton;
