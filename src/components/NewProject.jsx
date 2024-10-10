import Input from "./Input";
import { useContext, useRef } from "react";
import Modal from "./Modal";
import { ProjectManagerContext } from "../store/project-manager-context";

const NewProject = () => {
  const { handleAddProject, handleCancel } = useContext(ProjectManagerContext);

  const dialog = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const newProjectData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };

    if (
      !newProjectData.title.trim() ||
      !newProjectData.description.trim() ||
      !newProjectData.dueDate.trim()
    ) {
      dialog.current.open();
      return;
    }

    handleAddProject(newProjectData);
  }

  return (
    <>
      <div>
        <Modal ref={dialog}>
          <h1 className="font-bold text-2xl">Oppps!</h1>
          <p>Seems you entered an invalid input</p>
          <p>Kindly fill the input fields with correct data</p>
        </Modal>
      </div>
      <div className=" flex flex-col justify-center ms-8 p-8">
        <div className="flex justify-end gap-8">
          <button
            onClick={handleCancel}
            className="bg-stone-200 w-16 hover:bg-stone-800 hover:text-stone-200 p-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-200 w-16 hover:bg-stone-800 hover:text-stone-200 p-2 rounded-lg"
          >
            Save
          </button>
        </div>
        <div>
          <Input ref={titleRef} label="Title" type="text" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input ref={dueDateRef} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};
export default NewProject;
