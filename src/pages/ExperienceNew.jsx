import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createExperience } from "../features/skillSlice";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

export const ExperienceNew = () => {
  const defaultValue = [
    {
      year: "2017",
      position: "Web Developer",
      company: "Inficreax",
      description: "description",
    },
  ];
  const dispatch = useDispatch();
  const [experienceInputs, setExperienceInputs] = useState(defaultValue);
  const experienceSkills = JSON.parse(localStorage.getItem("experienceSkills"));
  // console.log(experienceSkills);

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
  localStorage.setItem(
    "experienceSkills",
    JSON.stringify([...experienceInputs])
  );

  useEffect(() => {
    dispatch(createExperience(experienceSkills));
  }, [experienceSkills]);

  return (
    <>
      <div className="">
        <div className=" grid grid-cols-12 mb-4">
          <div className="col-span-3">
            <h4 className=" uppercase my-0">
              <div className=" flex items-center gap-x-3">
                <i className="bi bi-star"></i>
                <span className="">Experience</span>
                <button
                  onClick={addNew}
                  className=" cursor-pointer text-sm rounded-xl text-blue-500 flex justify-center items-center w-[10px] h-[10px] p-3"
                >
                  <i className="bi bi-plus-circle"></i>
                </button>
              </div>
            </h4>
          </div>
        </div>

        {experienceInputs.map((input, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-2  border p-3 rounded-xl mb-3"
          >
            <div className="col-span-6 space-y-2">
              <div className="">
                <label className=" text-xs" htmlFor="">
                  Year
                </label>
                <TextInput
                  name="year"
                  value={input.year}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>

              <div className="">
                <label className=" text-xs" htmlFor="">
                  company
                </label>
                <TextInput
                  name="company"
                  value={input.company}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>
              <div className="">
                <label className=" text-xs" htmlFor="">
                  Position
                </label>
                <TextInput
                  name="position"
                  value={input.position}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>
            </div>

            <div className=" col-span-6">
              <div className="">
                <div className="">
                  <label className=" text-xs" htmlFor="">
                    Description
                  </label>
                  <TextArea
                    name="description"
                    value={input.description}
                    onChange={(e) => handleChange(e, i)}
                    className={` border`}
                    type="text"
                    rows="3"
                  />
                </div>
                <Button
                  className=" text-red-500 bg-red-100 mt-2"
                  icon="x-circle"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="grid grid-cols-12">
          <div className="col-span-3 border-l border-lime-500 ml-8">
            <div className=" flex items-center gap-3 -ml-1">
              <div className="w-2 h-2 rounded-full bg-lime-500"></div>
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
