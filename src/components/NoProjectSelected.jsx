import { useContext } from "react";
import Logo from "../assets/logo.png";
import { ProjectManagerContext } from "../store/project-manager-context";
const NoProjectSelected = () => {
  const { handleStartAddProject } = useContext(ProjectManagerContext);
  return (
    <div className="flex flex-col items-center gap-4 mt-6 ms-12 text-stone-800">
      <img src={Logo} className="w-32 h-32 mx-auto" alt="No Project Selected" />
      <h2 className="font-bold text-2xl">No project selected</h2>
      <p className="">Select a project or get started with a new one </p>
      <button
        onClick={handleStartAddProject}
        className="bg-stone-800 hover:bg-stone-700 rounded-md text-stone-300 font-bold px-2 py-2"
      >
        Create new project
      </button>
    </div>
  );
};

export default NoProjectSelected;
