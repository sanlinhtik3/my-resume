import React from 'react'

const TextInput = ({type="text", className, icon="pencil-fill", ...props}) => {
  return (
    <>
      <div className=" flex gap-3">
        <i className={`bi bi-${icon}`}></i>
        <input {...props} type={type} className={` p-2 py-1 rounded-xl ${className}`} />
      </div>
    </>
  );
}

export default TextInput