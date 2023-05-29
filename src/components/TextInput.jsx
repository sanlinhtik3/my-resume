import React from 'react'

const TextInput = ({type="text", className, icon="pencil-fill", ...props}) => {
  return (
    <>
      <div className={`flex gap-1 p-1 rounded-xl w-full text-xs ${className}`}>
        <div className="w-[10px] h-[10px] p-3 bg-blue-100 flex justify-center items-center rounded-lg">
          <i className={`bi bi-${icon} text-[0.7rem] text-blue-500`}></i>
        </div>
        <input {...props} type={type} className={`w-full outline-none `} />
      </div>
    </>
  );
}

export default TextInput