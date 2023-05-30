import React from "react";

const TextArea = ({
  type = "text",
  className,
  icon = "pencil-fill",
  label = "Lable",
  ...props
}) => {
  return (
    <>
      <div className={`gap-1 p-2 px-3 rounded-xl w-full text-xs ${className}`}>
        <label className=" text-[0.6rem] text-slate-400" htmlFor="">
          {label}
        </label>
        <div className=" flex items-start">
          <textarea
            {...props}
            type={type}
            autoFocus
            className={`w-full outline-none `}
          />
          <i className={`bi bi-${icon} text-[0.7rem] text-blue-500`}></i>
        </div>
      </div>
    </>
  );
};

export default TextArea;
