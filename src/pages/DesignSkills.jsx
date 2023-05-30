import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createSkill } from "../features/skillSlice";
import Button from "../components/Button";

const DesignSkills = ({ setInputSkills }) => {
  const defaultValue = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" },
    { name: "React.js" },
    { name: "MERN Stack" },
  ];
  
  const dispatch = useDispatch();
  const [skillsInputs, setSkillsInputs] = useState(defaultValue);
  const skills = JSON.parse(localStorage.getItem("skills"));
  // console.log(skills);

  const addNew = (e) => {
    setSkillsInputs([...skillsInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...skillsInputs];
    deleteValue.splice(i, 1);
    setSkillsInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...skillsInputs];
    onChangeVal[i][name] = value;
    setSkillsInputs(onChangeVal);
  };
  localStorage.setItem("skills", JSON.stringify([...skillsInputs]));

  useEffect(() => {
    dispatch(createSkill(skills));
  }, [skills]);

  return (
    <>
      {/* Design Skills */}
      <div className=" space-y-3 ">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-x-2">
              <i className="bi bi-laptop"></i> <span className="">Skills</span>
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

        <div className=" grid grid-cols-3 gap-5 border border-blue-100 rounded-xl p-3">
          {skillsInputs.map((input, i) => (
            <div key={i} className="">
              <div className=" flex items-center gap-x-2">
                <TextInput
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border `}
                  type="text"
                />
                <Button
                  className=" text-red-500 bg-red-100"
                  icon="x-circle"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
                {/* <button
                  onClick={() => handleDelete(i)}
                  className=" w-[10px] h-[10px] p-4 flex justify-center items-center bg-red-100 rounded-full"
                >
                  <i className="bi bi-x-circle text-red-500 text-sm"></i>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesignSkills;
