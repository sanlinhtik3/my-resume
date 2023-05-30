import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createSocial } from "../features/skillSlice";
import Button from "../components/Button";

const SocialSkill = () => {
  const defaultValue = [{name: "Teamwork"}, {name: "Independent work"}, {name: "Hardworking"}]
  const dispatch = useDispatch();
  const [socialInputs, setSocialInputs] = useState(defaultValue);
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
      <div className=" space-y-3 ">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-patch-check"></i>
              <span className="">Social Skills</span>
              <Button
                className=" text-blue-500 ring-0 ring-transparent"
                icon="plus-circle"
                onClick={addNew}
              ></Button>
            </h4>
          </div>

          <div className="col-span-9">
            <div className=" h-px w-full bg-blue-500 mt-2"></div>
          </div>
        </div>

        <div className=" grid grid-cols-2 gap-5 border border-blue-100 rounded-xl p-3">
          {socialInputs.map((input, i) => (
            <div key={i} className="">
              <div className=" flex items-center gap-x-2">
                <TextInput
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
                <Button
                  className=" text-red-500 bg-red-100"
                  icon="x-circle"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSkill;
