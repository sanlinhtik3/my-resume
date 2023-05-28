import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createSocial } from "../features/skillSlice";

const SocialSkill = () => {
  const dispatch = useDispatch();
  const [socialInputs, setSocialInputs] = useState([{ name: "" }]);
  const socialSkills = JSON.parse(localStorage.getItem("socialSkills"));
  //   console.log(socialSkills);

  const addNew = (e) => {
    setSocialInputs([...socialInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...socialInputs];
    deleteValue.splice(i, 1);
    setSocialInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...socialInputs];
    onChangeVal[i][name] = value;
    setSocialInputs(onChangeVal);
  };
    localStorage.setItem("socialSkills", JSON.stringify([...socialInputs]));
  //   localStorage.setItem("socialSkills", JSON.stringify([...socialSkills]));

  useEffect(() => {
    dispatch(createSocial(socialSkills));
  }, [socialSkills]);

  return (
    <>
      {/* Design socialSkills */}
      <div className="">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className="text-lime-500 uppercase my-0">
              <i className="bi bi-star"></i>{" "}
              <span className=" ml-3">Social socialSkills</span>
            </h4>
          </div>

          <div className="col-span-9">
            <div className=" h-px w-full bg-lime-500 mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-3"></div>

          <div className=" col-span-9">
            <div className=" flex gap-2 ">
              <button
                onClick={addNew}
                className=" cursor-pointer bg-lime-500 text-sm rounded-xl text-white flex justify-center items-center w-[10px] h-[10px] p-3"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
              <div className=" grid grid-cols-2 gap-5">
                {socialInputs.map((input, i) => (
                  <div key={i} className="">
                    <h4
                      onDoubleClick={() =>
                        setIsEdit({
                          ...isEdit,
                          [`name${i}`]: !`${isEdit}.name${i}`,
                        })
                      }
                      className=" text-lime-500 uppercase my-0"
                    >
                      {input.name}
                    </h4>
                    <div className=" flex items-center gap-x-2">
                      <TextInput
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e, i)}
                        className={` border border-red-500`}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSkill;
