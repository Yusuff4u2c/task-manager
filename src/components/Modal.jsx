import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 items-center p-4 rounded-md"
    >
      {children}
      <form method="dialog">
        {" "}
        <button className="bg-stone-600 p-2 my-4 rounded-lg hover:bg-stone-700">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("root-modal")
  );
});

export default Modal;
