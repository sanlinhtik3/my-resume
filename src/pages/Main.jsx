import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Test from "./Test";
import DesignSkills from "./DesignSkills";
import { useSelector } from "react-redux";
import Preview from "./Preview";
import SocialSkill from "./SocialSkills";
import { Experience } from "./Experience";

const Main = () => {
  const getInfo = JSON.parse(localStorage.getItem("info"));

  // const skills = JSON.parse(localStorage.getItem("skills"));

  // const skills = useSelector((state) => state);
  // console.log(useSelector((state) => state.skills));
  


  const [inputs, setInputs] = useState({});
  // console.log(inputs);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((preValues) => ({ ...preValues, ...getInfo, [name]: value }));
  };
  localStorage.setItem("info", JSON.stringify({ ...getInfo, ...inputs }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs)
  };

  // Print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const [isEdit, setIsEdit] = useState({
    name: true,
    career: true,
    phone: true,
    email: true,
    behance: true,
    aboutme: true
  });


  return (
    <>
      <div className="grid grid-cols-12 px-2 mx-auto gap-5 my-20">
        <div className=" col-span-6">
          <form
            className="prose prose-sm max-w-none border"
            ref={componentRef}
            onSubmit={handleSubmit}
          >
            <div className="p-5 font-poppin space-y-5">
              {/* Experience */}
              <Experience/>

              {/* Design Skills */}
              <DesignSkills />

              {/* Social Skills */}
              <SocialSkill/>
            </div>
          </form>
        </div>

        {/* Preview */}
        <Preview/>
      </div>
    </>
  );
};

export default Main;
