import React from "react";

const Button = ({ className='', icon, children, ...props }) => {
  return (
    <div>
      <button
        {...props}
        className={`${className} flex justify-center items-center rounded-xl px-2 py-1 text-xs ring-1 ring-red-200`}
      >
        <i className={`bi bi-${icon} text-sm mr-1`}></i> {children}
      </button>
    </div>
  );
};

export default Button;
