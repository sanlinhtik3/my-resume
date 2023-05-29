import React from "react";

const Button = ({ className, icon, name, ...props }) => {
  return (
    <div>
      <button
        className={`${className} cursor-pointer bg-lime-500 text-sm  text-white flex justify-center items-center whitespace-nowrap p-3 py-1 rounded-lg`}
      >
        {name} <i className={`bi bi-${icon}`}></i>
      </button>
    </div>
  );
};

export default Button;
