import { useContext, useState } from "react";
import { ProjectManagerContext } from "../store/project-manager-context";
import Tasks from "./Task";

const SelectedProject = () => {
  const { selectedProject, handleDeleteSelectedProject } = useContext(
    ProjectManagerContext
  );

  const dueDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "short", year: "numeric" }
  );

  return (
    <div className="w-96 ps-8 pt-8">
      <header className="my-4 border-b-2 pb-2">
        <div className="flex items-center justify-between my-2">
          <h1 className="font-bold uppercase">{selectedProject.title}</h1>
          <button
            onClick={handleDeleteSelectedProject}
            className="bg-red-300 w-16 font-bold hover:bg-red-800 hover:text-stone-200 p-2 rounded-lg"
          >
            Delete
          </button>
        </div>

        <p className="text-sm text-stone-400 mb-2">{dueDate}</p>
        <p className="whitespace-pre-wrap">{selectedProject.description}</p>
      </header>
      <h1>
        <Tasks />
      </h1>
    </div>
  );
};

export default SelectedProject;
