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
import Setting from "../components/Setting";
import { ExperienceNew } from "./ExperienceNew";
import { SocialAccount } from "./SocialAccount";
import Educations from "./Educations";
import Language from "./Languare";
import { ProjectLink } from "./ProjectLink";
import { isMobile } from "react-device-detect";

const Main = () => {

  // Settings
  const { preference } = useSelector((state) => state.settings);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    aboutme: true,
  });

  return (
    <>
      <div className="grid grid-cols-2 px-5 mx-auto gap-5 py-10 bg-slate-50">
        <div className="col-span-2 ">
          <h1 className=" text-center text-3xl font-bold text-blue-500">
            - My Resume -
          </h1>
        </div>

        <div className="">
          <form
            className="prose prose-sm max-w-none shadow-xl shadow-blue-50 bg-white rounded-xl"
            // ref={componentRef}
            onSubmit={handleSubmit}
          >
            <div className="p-5 font-poppin space-y-5">
              {/* Setting */}
              <Setting />

              {/* Education */}
              <Educations />

              {/* Experience */}
              <ExperienceNew />

              {/* Design Skills */}
              <DesignSkills />

              {/* Social Skills */}
              <SocialSkill />

              {/* Language */}
              <Language />

              {/* Socail Account */}
              <SocialAccount />

              {/* Project Link */}
              <ProjectLink />
            </div>
          </form>
        </div>

        {/* Preview */}
        <Preview color={preference.color} />
      </div>
    </>
  );
};

export default Main;
