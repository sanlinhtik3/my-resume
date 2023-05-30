import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import Markdown from "../components/Markdown";

const Preview = ({ color }) => {
  const getInfo = JSON.parse(localStorage.getItem("info"));

  const { educations } = useSelector((state) => state.skills);
  const { skills } = useSelector((state) => state.skills);
  const { socials } = useSelector((state) => state.skills);
  const { experiences } = useSelector((state) => state.skills);
  const { socialAccounts } = useSelector((state) => state.skills);
  const { languages } = useSelector((state) => state.skills);
  const { projectLinks } = useSelector((state) => state.skills);

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((preValues) => ({ ...preValues, ...getInfo, [name]: value }));
  };
  localStorage.setItem("info", JSON.stringify({ ...getInfo, ...inputs, }));

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
    welcome: true,
    aboutme: true,
  });

  useEffect(() => {
    document.title = getInfo.name + "_Resume";
  }, [getInfo])

  return (
    <>
      <div className="prose prose-sm max-w-none shadow-xl shadow-blue-50 bg-white rounded-xl">
        <form
          className="prose prose-sm max-w-none"
          ref={componentRef}
          onSubmit={handleSubmit}
        >
          <div className=" p-5 lg:p-8 font-poppin space-y-5">
            {isEdit.name ? (
              <h1
                onDoubleClick={() =>
                  setIsEdit({ ...isEdit, name: !isEdit.name })
                }
                className={`text-blue-500 uppercase`}
              >
                {getInfo.name ? getInfo.name : "Your Name"}
              </h1>
            ) : (
              <TextInput
                value={getInfo.name}
                name="name"
                onChange={handleChange}
                className={` border`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === "Escape") {
                    setIsEdit({ ...isEdit, name: true });
                  }
                }}
                type="text"
              />
            )}

            <div className=" flex justify-between gap-5">
              {isEdit.career ? (
                <h4
                  onDoubleClick={() =>
                    setIsEdit({ ...isEdit, career: !isEdit.career })
                  }
                  className={`text-blue-500 font-bold whitespace-nowrap my-0`}
                >
                  {getInfo.career ? getInfo.career : "Your Career"}
                </h4>
              ) : (
                <TextInput
                  value={getInfo.career}
                  name="career"
                  onChange={handleChange}
                  className={` border`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === "Escape") {
                      setIsEdit({ ...isEdit, career: true });
                    }
                  }}
                  type="text"
                />
              )}

              <div className={`h-px w-full bg-blue-500 mt-2`}></div>
              <div className="">
                <table className="table-auto my-0">
                  <tr>
                    <th className="text-start text-blue-500 pr-10">Phone</th>
                    <td className="whitespace-nowrap">
                      {isEdit.phone ? (
                        <h4
                          onDoubleClick={() =>
                            setIsEdit({ ...isEdit, phone: !isEdit.phone })
                          }
                          className={` font-normal whitespace-nowrap my-0`}
                        >
                          {getInfo.phone ? getInfo.phone : "09 969 474 745"}
                        </h4>
                      ) : (
                        <TextInput
                          value={getInfo.phone}
                          name="phone"
                          onChange={handleChange}
                          className={` border`}
                          onKeyDown={(event) => {
                            if (
                              event.key === "Enter" ||
                              event.key === "Escape"
                            ) {
                              setIsEdit({ ...isEdit, phone: true });
                            }
                          }}
                          type="text"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className=" text-star text-blue-500 pr-10">E-mail</th>
                    <td className="whitespace-nowrap">
                      {isEdit.email ? (
                        <h4
                          onDoubleClick={() =>
                            setIsEdit({ ...isEdit, email: !isEdit.email })
                          }
                          className={`font-normal  whitespace-nowrap my-0`}
                        >
                          {getInfo.email
                            ? getInfo.email
                            : "sanlinhtike.dev@gmail.com"}
                        </h4>
                      ) : (
                        <TextInput
                          value={getInfo.email}
                          name="email"
                          onChange={handleChange}
                          className={` border`}
                          onKeyDown={(event) => {
                            if (
                              event.key === "Enter" ||
                              event.key === "Escape"
                            ) {
                              setIsEdit({ ...isEdit, email: true });
                            }
                          }}
                          type="text"
                        />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className=" text-star text-blue-500 pr-10">Behance</th>
                    <td className="whitespace-nowrap">
                      {isEdit.behance ? (
                        <h4
                          onDoubleClick={() =>
                            setIsEdit({ ...isEdit, behance: !isEdit.behance })
                          }
                          className={` font-normal whitespace-nowrap my-0`}
                        >
                          {getInfo.behance ? getInfo.behance : "sanlinhtike"}
                        </h4>
                      ) : (
                        <TextInput
                          value={getInfo.behance}
                          name="behance"
                          onChange={handleChange}
                          className={` border`}
                          onKeyDown={(event) => {
                            if (
                              event.key === "Enter" ||
                              event.key === "Escape"
                            ) {
                              setIsEdit({ ...isEdit, behance: true });
                            }
                          }}
                          type="text"
                        />
                      )}
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className=" grid grid-cols-12 mt-0">
              <div className="col-span-3">
                <div className="">
                  {isEdit.welcome ? (
                    <h4
                      onDoubleClick={() =>
                        setIsEdit({ ...isEdit, welcome: !isEdit.welcome })
                      }
                      className={`bg-blue-500 rounded-md px-3 py-1 ml-8 inline-block text-white uppercase`}
                    >
                      Hello!
                    </h4>
                  ) : (
                    <TextInput
                      value={getInfo.welcome}
                      name="welcome"
                      onChange={handleChange}
                      className={` border`}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === "Escape") {
                          setIsEdit({ ...isEdit, welcome: true });
                        }
                      }}
                      type="text"
                    />
                  )}
                </div>
              </div>
              <div className="col-span-9">
                <div className={`space-y-5 text-blue-500`}>
                  {isEdit.aboutme ? (
                    <div
                      onDoubleClick={() =>
                        setIsEdit({ ...isEdit, aboutme: !isEdit.aboutme })
                      }
                      className={`text-blue-500`}
                    >
                      <Markdown children={getInfo.aboutme} />
                    </div>
                  ) : (
                    <TextArea
                      rows="5"
                      value={getInfo.aboutme}
                      name="aboutme"
                      onChange={handleChange}
                      className={` border`}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === "Escape") {
                          setIsEdit({ ...isEdit, aboutme: true });
                        }
                      }}
                      type="text"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-mortarboard"></i>
                    <span className=" ml-3">Education</span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              {educations.map((input, i) => (
                <div key={i} className="grid grid-cols-12">
                  <div className={`col-span-3 border-l border-blue-500 ml-8`}>
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className={`w-2 h-2 rounded-full bg-blue-500`}></div>
                      <h4>{input.year}</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">{input.name}</h4>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>{input.degree}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-star"></i>{" "}
                    <span className=" ml-3">Experience</span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              {experiences.map((input, i) => (
                <div key={i} className="grid grid-cols-12">
                  <div className={`col-span-3 border-l border-blue-500 ml-8`}>
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className={`w-2 h-2 rounded-full bg-blue-500`}></div>
                      <h4>{input.year}</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">{input.company}</h4>
                        <h6 className=" text-xs text-slate-700">
                          {input.position}
                        </h6>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>{input.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Design Skills */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-laptop"></i>
                    <span className=" ml-3">Skills</span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-3"></div>

                <div className=" col-span-9">
                  <div className=" grid grid-cols-4 gap-2">
                    {skills.map((input, i) => (
                      <div key={i} className="">
                        <h4 className={` my-0`}>{input.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Skills */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-patch-check"></i>
                    <span className=" ml-3">Social Skills</span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-3"></div>

                <div className=" col-span-9">
                  <div className=" grid grid-cols-12">
                    {socials.map((input, i) => (
                      <div key={i} className="col-span-4">
                        <h4 className={` my-0`}>{input.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-translate"></i>
                    <span className=" ml-3">
                      Language{languages.length > 1 && "s"}
                    </span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-3"></div>

                <div className=" col-span-9">
                  <div className=" grid grid-cols-12">
                    {languages.map((input, i) => (
                      <div key={i} className=" col-span-4">
                        <h4 className={` my-0`}>{input.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Account */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-patch-check"></i>
                    <span className=" ml-3">Social Account</span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-3"></div>

                <div className=" col-span-9 space-y-3">
                  {socialAccounts.map((input, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs w-full"
                    >
                      <i className={`bi bi-${input.icon}`}></i>
                      <h6 className={`my-0`}>{input.name}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="">
              <div className=" grid grid-cols-12">
                <div className="col-span-3">
                  <h4 className={`text-blue-500 uppercase my-0`}>
                    <i className="bi bi-patch-check"></i>
                    <span className=" ml-3">
                      Project Link{projectLinks.length > 1 && "S"}
                    </span>
                  </h4>
                </div>

                <div className="col-span-9">
                  <div className={`h-px w-full bg-blue-500 mt-2`}></div>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-3"></div>

                <div className=" col-span-9 space-y-3">
                  {projectLinks.map((input, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-[10px] h-[10px] p-3 rounded-lg bg-blue-100 text-blue-500 flex justify-center items-center">
                        <span>{i + 1}</span>
                      </div>
                      <div className="text-xs w-full">
                        <h4 className={`my-0`}>{input.name}</h4>
                        <a
                          className=" decoration-blue-500 font-normal"
                          href={`///${input.link}`}
                        >
                          {input.link}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="p-5 lg:p-8">
          <button
            onClick={handlePrint}
            className={`border bg-blue-500 px-2 text-white py-1 rounded-xl whitespace-nowrap inline-block w-full`}
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;
