import React from "react";

const TextArea = ({
  type = "text",
  className,
  icon = "pencil-fill",
  ...props
}) => {
  return (
    <>
      <div className=" flex gap-3">
        <i className={`bi bi-${icon}`}></i>
        <textarea
          {...props}
          type={type}
          
          className={` w-full p-2 py-1 rounded-xl ${className}`}
        />
      </div>
    </>
  );
};

export default TextArea;
