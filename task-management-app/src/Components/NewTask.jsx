/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import ToggleButton from "./ToggleButton";

export default function NewTask({ onAdd, onCancel }) {
  const [updateIsCompleted, setUpdateIsCompleted] = useState(false);
  console.log("This is line 9:", updateIsCompleted);
  const modal = useRef();

  const title = useRef();
  const Description = useRef();

  const [DueDate, setdueDate] = useState();
  // const DueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = Description.current.value;
    // const enteredDueDate = DueDate.current.value;
    const enteredDueDate = DueDate;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    console.log("this is isCompleted: ", updateIsCompleted);

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      isCompleted: updateIsCompleted,
    });
  }

  const handleToggleIsCompleted = () => {
    setUpdateIsCompleted(!updateIsCompleted);
  };

  // Function to determine if a task is overdue
  const isOverdue = (dueDate) => {
    const today = new Date();
    const taskDueDate = new Date(dueDate);
    return taskDueDate < today;
  };

  useEffect(() => {
    if (isOverdue(DueDate)) {
      setUpdateIsCompleted("null");
    } else {
      setUpdateIsCompleted(false);
    }
  }, [DueDate]);

  function HandleChangeDueDate(e) {
    setdueDate(e.target.value);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops .. looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={Description} label="Description" Textarea />
          <Input type="date" onChange={HandleChangeDueDate} label="Due Date" />
        </div>

        {console.log("This is in newTask", updateIsCompleted)}

        <ToggleButton
          isCompleted={updateIsCompleted}
          onToggle={handleToggleIsCompleted}
          isOverdue={isOverdue(DueDate)}
        />
      </div>
    </>
  );
}
