import { useContext, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import {
  ContextProvider,
  ProjectManagerContext,
} from "./store/project-manager-context";

const ContentComponent = () => {
  const { projectState } = useContext(ProjectManagerContext);
  let content = <SelectedProject />;

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  }
  return <div className="flex-1">{content}</div>;
};

function App() {
  return (
    <ContextProvider>
      <main className="flex h-screen my-6">
        <Sidebar />
        <ContentComponent />
      </main>
    </ContextProvider>
  );
}

export default App;
