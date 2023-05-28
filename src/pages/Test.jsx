import { useState } from "react";
import TextInput from "../components/TextInput";

const Test = () => {

  const [skillsInputs, setSkillsInputs] = useState([{name: "", year: ""}]);

  const addNew = () => {
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
    onChangeVal[i][name]=value;
    setSkillsInputs(onChangeVal);
  };

  console.log(skillsInputs);

  return (
    <>
      {skillsInputs.map((input, i) => (
        <div key={i} className="">
          <TextInput
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e, i)}
            className={` border border-red-500`}
          />
          <TextInput
            name="year"
            value={input.year}
            onChange={(e) => handleChange(e, i)}
            className={` border border-red-500`}
          />
          <button onClick={() => handleDelete(i)}>Delete</button>
        </div>
      ))}
      <span onClick={addNew}>New +</span>
    </>
  );
};

export default Test;
