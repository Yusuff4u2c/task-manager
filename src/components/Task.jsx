import { useContext } from "react";
import NewTask from "./NewTasks";
import { ProjectManagerContext } from "../store/project-manager-context";

const Tasks = () => {
  const { handleAddTask, handleDeleteTask, projectState } = useContext(
    ProjectManagerContext
  );

  const { tasks } = projectState;
  return (
    <div>
      <NewTask />
      <ul>
        {tasks.map((task) => (
          <li
            className="flex justify-between bg-stone-200 my-2 p-2 rounded-sm"
            key={task.taskId}
          >
            <span>{task.task}</span>
            <button
              onClick={() => handleDeleteTask(task.taskId)}
              className="bg-stone-200 font-bold hover:bg-stone-800 hover:text-stone-200 rounded-sm"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
