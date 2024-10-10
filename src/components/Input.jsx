import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, type }, ref) {
  const classes =
    "bg-stone-300 w-[350px] focus:outline-none focus:border-b-2 p-1 rounded focus:border-stone-800";
  return (
    <div className="flex flex-col">
      <label className="uppercase font-bold" htmlFor="">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes}></textarea>
      ) : (
        <input ref={ref} type={type} className={classes} />
      )}
    </div>
  );
});

export default Input;
