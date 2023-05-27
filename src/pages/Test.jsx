import { useState } from "react";
import TextInput from "../components/TextInput";

const Test = () => {

  const [inputs, setInputs] = useState([{name: "", year: ""}]);

  const addNew = () => {
    setInputs([...inputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...inputs];
    deleteValue.splice(i, 1);
    setInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...inputs];
    onChangeVal[i][name]=value;
    setInputs(onChangeVal);
  };

  console.log(inputs);

  return (
    <>
      {inputs.map((input, i) => (
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
