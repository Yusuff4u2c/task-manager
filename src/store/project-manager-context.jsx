import { createContext, useState } from "react";

export const ProjectManagerContext = createContext({
  projectState: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  handleStartAddProject: () => {},
  handleDeleteSelectedProject: () => {},
  handleSelectProject: () => {},
  selectedProject: "",
});

export function ContextProvider({ children }) {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    const newTask = {
      task: task,
      selectedProjectId: projectState.selectedProjectId,
      taskId: Math.random(),
    };

    setProjectState((prevState) => {
      const updatedState = {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
      console.log("Updated state:", updatedState);
      return updatedState;
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.taskId !== id),
    }));
  }

  function handleStartAddProject() {
    console.log("started");

    setProjectState((prevState) => ({ ...prevState, selectedProjectId: null }));
    console.log(projectState);
  }

  function handleDeleteSelectedProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  function handleCancel() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      const updatedState = {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
      console.log("Updated state:", updatedState);
      return updatedState;
    });
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  const projectManagerContextValues = {
    projectState,
    setProjectState,
    handleAddTask,
    handleDeleteTask,
    handleStartAddProject,
    handleDeleteSelectedProject,
    handleSelectProject,
    selectedProject,
    handleAddProject,
    handleCancel,
  };

  return (
    <ProjectManagerContext.Provider value={projectManagerContextValues}>
      {children}
    </ProjectManagerContext.Provider>
  );
}
