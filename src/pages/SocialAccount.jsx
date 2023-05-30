import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { createSocialAccount } from "../features/skillSlice";
import Button from "../components/Button";

export const SocialAccount = ({}) => {
  const defaultValue = [
    { icon: "github", name: "github.com/sanlinhtik3" },
    { icon: "facebook", name: "fb.com/sanlinhtik.dev" },
    { icon: "youtube", name: "youtube.com/@sanlinhtike" },
  ];
  const dispatch = useDispatch();
  const [socialAccountInputs, setSocialAccountInputs] = useState(defaultValue);
  const socialAccountSkills = JSON.parse(localStorage.getItem("socialAccountSkills"));
  // console.log(socialAccountSkills);

  const addNew = (e) => {
    setSocialAccountInputs([...socialAccountInputs, { name: "" }]);
  };

  const handleDelete = (i) => {
    const deleteValue = [...socialAccountInputs];
    deleteValue.splice(i, 1);
    setSocialAccountInputs(deleteValue);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...socialAccountInputs];
    onChangeVal[i][name] = value;
    setSocialAccountInputs(onChangeVal);
  };
  localStorage.setItem("socialAccountSkills", JSON.stringify([...socialAccountInputs]));
  //   localStorage.setItem("socialAccountSkills", JSON.stringify([...socialAccountSkills]));

  useEffect(() => {
    dispatch(createSocialAccount(socialAccountSkills));
  }, [socialAccountSkills]);

  return (
    <>
      {/* Design socialAccountSkills */}
      <div className=" space-y-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <h4 className=" uppercase my-0 flex items-center gap-3">
              <i className="bi bi-patch-check"></i>{" "}
              <span className=" whitespace-nowrap">Social Account</span>
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

        <div className="grid grid-cols-1 gap-y-3 border border-blue-100 rounded-xl p-3">
          {socialAccountSkills.map((input, i) => (
            <div key={i} className="">
              <div className="flex items-center gap-x-2">
                <TextInput
                  name="icon"
                  value={input.icon}
                  onChange={(e) => handleChange(e, i)}
                  className={` border`}
                  type="text"
                />
                <TextInput
                  name="name"
                  value={input.name}
                  onChange={(e) => handleChange(e, i)}
                  className={` border w-full`}
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
