import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch } from "react-redux";
import { createLanguage } from "../features/skillSlice";
import Button from "../components/Button";

const Language = () => {
  const defaultValue = [
    { name: "Myanmar" },
    { name: "English" },
  ];

  const dispatch = useDispatch();
  const [languageInputs, setLanguageInputs] = useState(defaultValue);
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
              <i className="bi bi-translate"></i>{" "}
              <span className="">Languages</span>
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

export default Language;
