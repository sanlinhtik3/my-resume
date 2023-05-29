import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createExperience } from "../features/skillSlice";

export const Experience = () => {
  const dispatch = useDispatch();
  const [experienceInputs, setExperienceInputs] = useState([{ year: "", position: "", description: "", duty: "" }]);
  const experienceSkills = JSON.parse(localStorage.getItem("experienceSkills"));
    console.log(experienceSkills);

  const addNew = (e) => {
    setExperienceInputs([...experienceInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...experienceInputs];
    deleteValue.splice(i, 1);
    setExperienceInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...experienceInputs];
    onChangeVal[i][name] = value;
    setExperienceInputs(onChangeVal);
  };
  localStorage.setItem("experienceSkills", JSON.stringify([...experienceInputs]));

  useEffect(() => {
    dispatch(createExperience(experienceSkills));
  }, [experienceSkills]);

  return (
    <>
      <div className="">
        <div className=" grid grid-cols-12">
          <div className="col-span-3">
            <h4 className="text-blue-500 uppercase my-0">
              <i className="bi bi-star"></i>{" "}
              <span className=" ml-3">Experience</span>
              <button
                onClick={addNew}
                className=" cursor-pointer bg-blue-500 text-sm rounded-xl text-white flex justify-center items-center w-[10px] h-[10px] p-3"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </h4>
          </div>

          <div className="col-span-9">
            <div className=" h-px w-full bg-blue-500 mt-2"></div>
          </div>
        </div>

        {experienceInputs.map((input, i) => (
          <div key={i} className="grid grid-cols-12 gap-2">
            <div className="col-span-3 border-l border-blue-500 ml-8">
              <div className=" flex justify-start items-center gap-3 -ml-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <TextInput
                  name="year"
                  value={input.year}
                  onChange={(e) => handleChange(e, i)}
                  className={` border border-red-500`}
                  type="text"
                />
              </div>
            </div>

            <div className=" col-span-9">
              <div className=" grid grid-cols-12 gap-2">
                <div className=" col-span-3 space-y-2">
                  <TextInput
                    name="position"
                    value={input.position}
                    onChange={(e) => handleChange(e, i)}
                    className={` border border-red-500`}
                    type="text"
                  />
                  <TextInput
                    name="duty"
                    value={input.duty}
                    onChange={(e) => handleChange(e, i)}
                    className={` border border-red-500`}
                    type="text"
                  />
                </div>
                <div className="col-span-9 border-b">
                  <TextInput
                    name="description"
                    value={input.description}
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
            </div>
          </div>
        ))}

        {/* <div className="grid grid-cols-12">
          <div className="col-span-3 border-l border-blue-500 ml-8">
            <div className=" flex items-center gap-3 -ml-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h4>2014-2018</h4>
            </div>
          </div>

          <div className=" col-span-9">
            <div className=" grid grid-cols-12">
              <div className=" col-span-3">
                <h4 className="">Developer</h4>
                <h6 className=" text-xs text-slate-700">Graphic Designer</h6>
              </div>
              <div className="col-span-9">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat fugit, perspiciatis nemo eos debitis corporis ipsum
                  asperiores dolore impedit praesentium laboriosam, voluptate
                  dicta, molestiae dignissimos iusto et quam? Voluptatum, vel!
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
