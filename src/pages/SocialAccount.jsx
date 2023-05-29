import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { createSocialAccount } from "../features/skillSlice";

export const SocialAccount = ({}) => {
  const dispatch = useDispatch();
  const [socialAccountInputs, setSocialAccountInputs] = useState([{ name: "", icon: "" }]);
  const socialAccountSkills = JSON.parse(localStorage.getItem("socialAccountSkills"));
  // console.log(socialAccountSkills);

  const addNew = (e) => {
    setSocialAccountInputs([...socialAccountInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...socialAccountInputs];
    deleteValue.splice(i, 1);
    setSocialAccountInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...socialAccountInputs];
    onChangeVal[i][name] = value;
    setSocialAccountInputs(onChangeVal);
  };
  localStorage.setItem("socialAccountSkills", JSON.stringify([...socialAccountInputs]));
  //   localStorage.setItem("socialAccountSkills", JSON.stringify([...socialAccountSkills]));

  useEffect(() => {
    dispatch(createSocialAccount(socialAccountSkills));
  }, [socialAccountSkills]);

  return (
    <>
      {/* Design socialAccountSkills */}
      <div className=" space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-star"></i>{" "}
              <span className="">Social Account</span>
              <button
                onClick={addNew}
                className=" cursor-pointer bg-lime-500 text-sm rounded-xl text-white flex justify-center items-center w-[10px] h-[10px] p-3"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </h4>
          </div>

          <div className="col-span-9">
            <div className=" h-px w-full bg-lime-500 mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-3">
          {socialAccountSkills.map((input, i) => (
            <div key={i} className="">
              <div className="flex items-center gap-x-2">
                <TextInput
                  name="icon"
                  value={input.icon}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
                <TextInput
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border w-full`}
                  type="text"
                />
                <button
                  onClick={() => handleDelete(i)}
                  className=" w-[10px] h-[10px] p-4 flex justify-center items-center bg-red-100 rounded-full"
                >
                  <i className="bi bi-x-circle text-red-500 text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
