import React from "react";

const TextArea = ({type="text", className, icon="pencil-fill", ...props}) => {
  return (
    <>
      <div className={`flex gap-3 p-1 rounded-xl w-full ${className}`}>
        <div className="w-[10px] h-[10px] p-3 bg-slate-300 flex justify-center items-center rounded-lg">
          <i className={`bi bi-${icon} text-[0.7rem] `}></i>
        </div>
        <textarea {...props} type={type} className={`w-full outline-none `} />
      </div>
    </>
  );
};

export default TextArea;
