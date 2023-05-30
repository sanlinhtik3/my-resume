// const TextInput = ({type="text", className, icon="pencil-fill", ...props}) => {
//   return (
//     <>
//       <div className={`flex gap-1 p-1 rounded-xl w-full text-xs ${className}`}>
//         <div className="w-[10px] h-[10px] p-4 bg-blue-100 flex justify-center items-center rounded-lg">
//           <i className={`bi bi-${icon} text-[0.7rem] text-blue-500`}></i>
//         </div>
//         <input {...props} type={type} autoFocus className={`w-full outline-none `} />
//       </div>
//     </>
//   );
// }

// export default TextInput


const TextInput = ({type="text", className, icon="pencil-fill", label="", ...props}) => {
  return (
    <>
      <div className={`gap-1 p-2 px-3 rounded-xl w-full text-xs  border border-blue-100 ${className}`}>
        <label className=" text-[0.6rem] text-slate-400" htmlFor="">{label ? label : {...props}.name}</label>
        <div className=" flex items-start">
          <input
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
}

export default TextInput