import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { createProjectLink } from "../features/skillSlice";
import Button from "../components/Button";

export const ProjectLink = ({}) => {
  const defaultValue = [
    { name: "Portfolio 1", link: "sanlinhtik3.github.io/portfolio" },
    { name: "Portfolio 2", link: "sanlinhtik3.github.io/personal_portfolio/" },
  ];
  const dispatch = useDispatch();
  const [projectLinkInputs, setProjectLinkInputs] = useState(defaultValue);
  const projectLinks = JSON.parse(localStorage.getItem("projectLinks"));
  // console.log(projectLinks);

  const addNew = (e) => {
    setProjectLinkInputs([...projectLinkInputs, { name: "", link: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...projectLinkInputs];
    deleteValue.splice(i, 1);
    setProjectLinkInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...projectLinkInputs];
    onChangeVal[i][name] = value;
    setProjectLinkInputs(onChangeVal);
  };
  localStorage.setItem("projectLinks", JSON.stringify([...projectLinkInputs]));
    // localStorage.setItem("projectLinks", JSON.stringify([...projectLinks]));

  useEffect(() => {
    dispatch(createProjectLink(projectLinks));
  }, [projectLinks]);

  return (
    <>
      {/* Design projectLinks */}
      <div className=" space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-patch-check"></i>{" "}
              <span className=" whitespace-nowrap">
                Project Link{projectLinks.length > 1 && "S"}
              </span>
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

        <div className="grid grid-cols-1 gap-y-3 border rounded-xl p-3">
          {projectLinks.map((input, i) => (
            <div key={i} className="">
              <div className="flex items-end gap-x-2">
                <div className=" w-full">
                  <label htmlFor="">Name</label>
                  <TextInput
                    name="name"
                    value={input.name}
                    onChange={(e) => handleChange(e, i)}
                    className={` border w-full`}
                    type="text"
                  />
                </div>
                <div className=" w-full">
                  <label htmlFor="">Link</label>
                  <TextInput
                    name="link"
                    value={input.link}
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
