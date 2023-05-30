import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createEducation } from "../features/skillSlice";
import Button from "../components/Button";

const Educations = () => {
  const dispatch = useDispatch();
  const [educationInputs, setEducationInputs] = useState([{ name: "" }]);
  const educations = JSON.parse(localStorage.getItem("educations"));
  //   console.log(educations);

  const addNew = (e) => {
    setEducationInputs([...educationInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...educationInputs];
    deleteValue.splice(i, 1);
    setEducationInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...educationInputs];
    onChangeVal[i][name] = value;
    setEducationInputs(onChangeVal);
  };
    localStorage.setItem("educations", JSON.stringify([...educationInputs]));
  //   localStorage.setItem("educations", JSON.stringify([...educations]));

  useEffect(() => {
    dispatch(createEducation(educations));
  }, [educations]);

  return (
    <>
      {/* Design educations */}
      <div className=" space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-mortarboard"></i>
              <span className="">Education</span>
              <button
                onClick={addNew}
                className=" cursor-pointer  text-sm rounded-xl text-blue-500 flex justify-center items-center w-[10px] h-[10px] p-3"
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </h4>
          </div>

          <div className="col-span-9">
            <div className=" h-px w-full bg-blue-500 mt-2"></div>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-5">
          {educationInputs.map((input, i) => (
            <div
              key={i}
              className=" flex items-end gap-x-2 w-full border border-blue-100 p-3 rounded-xl"
            >
              <div className=" w-full">
                <TextInput
                  label="Year"
                  name="year"
                  value={input.year}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>
              <div className=" w-full">
                <TextInput
                  label="University Name"
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>
              <div className=" w-full">
                <TextInput
                  label="Degree"
                  name="degree"
                  value={input.degree}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
              </div>
              <Button
                className=" text-red-500 bg-red-100"
                icon="x-circle"
                onClick={() => handleDelete(i)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Educations;
