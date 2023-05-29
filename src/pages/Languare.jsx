import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createLanguage } from "../features/skillSlice";

const Language = () => {
  const dispatch = useDispatch();
  const [languageInputs, setLanguageInputs] = useState([{ name: "" }]);
  const languages = JSON.parse(localStorage.getItem("languages"));
  //   console.log(languages);

  const addNew = (e) => {
    setLanguageInputs([...languageInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...languageInputs];
    deleteValue.splice(i, 1);
    setLanguageInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...languageInputs];
    onChangeVal[i][name] = value;
    setLanguageInputs(onChangeVal);
  };
    localStorage.setItem("languages", JSON.stringify([...languageInputs]));
  //   localStorage.setItem("languages", JSON.stringify([...languages]));

  useEffect(() => {
    dispatch(createLanguage(languages));
  }, [languages]);

  return (
    <>
      {/* Design languages */}
      <div className=" space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-star"></i>{" "}
              <span className="">Languages</span>
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

        <div className=" grid grid-cols-2 gap-5">
          {languageInputs.map((input, i) => (
            <div key={i} className="">
              <div className=" flex items-center gap-x-2">
                <TextInput
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
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

export default Language;
