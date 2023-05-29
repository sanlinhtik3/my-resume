import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import { useDispatch } from "react-redux";
import { setSetting } from "../features/settingSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState({});
  const getSettings = JSON.parse(localStorage.getItem("settings"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((pre) => ({ ...pre, [name]: value }));
  };

  localStorage.setItem(
    "settings",
    JSON.stringify({ ...getSettings, ...settings })
  );

  useEffect(() => {
    dispatch(setSetting(getSettings));
  }, [settings]);


  return (
    <>
      <h1>Setting</h1>
      <div className="">
        <label htmlFor="">Your favourite color</label>
        <TextInput
          name="color"
          value={getSettings.color}
          onChange={handleChange}
          className=" border"
        />
      </div>
    </>
  );
};

export default Setting;
