import { ProjectManagerContext } from "../store/project-manager-context";
import { useContext } from "react";

const Sidebar = () => {
  const { handleStartAddProject, projectState, handleSelectProject } =
    useContext(ProjectManagerContext);

  const { projects } = projectState;
  return (
    <aside className="bg-stone-900 w-1/3 min-w-60 rounded-e-xl text-stone-300 px-8 py-8 md:w-72">
      <h1 className="uppercase">your projects</h1>
      <button
        onClick={handleStartAddProject}
        className="capitalize bg-stone-600 p-2 my-4 rounded-lg hover:bg-stone-700"
      >
        add project
      </button>
      <ul>
        {projects.map((project) => (
          <li className="my-2 w-auto p-2" key={project.id}>
            <button
              onClick={() => handleSelectProject(project.id)}
              className="hover:bg-stone-300 hover:text-stone-800 w-full text-left rounded-sm py-1 px-2"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
