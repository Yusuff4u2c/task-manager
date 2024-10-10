import { useContext, useState } from "react";
import { ProjectManagerContext } from "../store/project-manager-context";

const NewTask = () => {
  const { handleAddTask } = useContext(ProjectManagerContext);
  const [taskInput, setTaskInput] = useState(" ");

  const handleChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = () => {
    if (!taskInput.trim()) return;
    handleAddTask(taskInput);
    setTaskInput("");
  };

  return (
    <div className="flex justify-between my-4">
      <input
        className="w-[70%] bg-stone-100 p-1 rounded focus:outline-none focus:border-b-2 focus:border-stone-800"
        onChange={handleChange}
        value={taskInput}
        type="text"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default NewTask;
