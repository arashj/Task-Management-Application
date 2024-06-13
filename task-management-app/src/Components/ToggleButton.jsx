const ToggleButton = ({ isCompleted, onToggle, isOverdue }) => {
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
        <p className="px-4 py-2 rounded-full bg-gray-800 text-white">Overdue</p>
      )}
    </>
  );
};

export default ToggleButton;
