/* eslint-disable react/prop-types */
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoTaskCreated({ onStartAddTask }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />

      <p className="text-stone-400 mb-4">No task has been created</p>
      <p className="mt-8">
        <Button onClick={onStartAddTask}>Create new project</Button>
      </p>
    </div>
  );
}
