import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

const Main = () => {
  const getInfo = JSON.parse(localStorage.getItem("info"));
  // console.log("localstorage", getInfo);

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

  // useEffect(() => {}, [getInfo, inputs]);

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
      <div className="grid grid-cols-12 container mx-auto gap-5 my-20">
        <div className=" col-span-6">
          <form
            className="prose prose-sm max-w-none border"
            ref={componentRef}
            onSubmit={handleSubmit}
          >
            <div className="p-5 font-poppin space-y-5">
              
              {/* Experience */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Experience</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Skills */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Design Skills</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3"></div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Skills */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Social Skills</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3"></div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4>Teamwork</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Independent work</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Smart work</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Lightweight</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Preview */}
        <div className="mx-auto border  col-span-6">
          <form
            className="prose prose-sm max-w-none"
            ref={componentRef}
            onSubmit={handleSubmit}
          >
            <div className="p-5 font-poppin space-y-5">
              {isEdit.name ? (
                <h1
                  onDoubleClick={() =>
                    setIsEdit({ ...isEdit, name: !isEdit.name })
                  }
                  className=" text-lime-500 uppercase"
                >
                  {getInfo.name}
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
                    className="  text-lime-500 font-bold uppercase whitespace-nowrap my-0"
                  >
                    {getInfo.career}
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

                <div className="h-px w-full bg-lime-500 mt-2"></div>
                <div className="">
                  <table className="table-auto my-0">
                    <tr>
                      <th className="text-start pr-10">Phone</th>
                      <td className="whitespace-nowrap">
                        {isEdit.phone ? (
                          <h4
                            onDoubleClick={() =>
                              setIsEdit({ ...isEdit, phone: !isEdit.phone })
                            }
                            className="  text-lime-500 font-bold uppercase whitespace-nowrap my-0"
                          >
                            {getInfo.phone}
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
                      <th className=" text-start pr-10">Email</th>
                      <td className="whitespace-nowrap">
                        {isEdit.email ? (
                          <h4
                            onDoubleClick={() =>
                              setIsEdit({ ...isEdit, email: !isEdit.email })
                            }
                            className="  text-lime-500 font-bold uppercase whitespace-nowrap my-0"
                          >
                            {getInfo.email}
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
                      <th className=" text-start pr-10">Behance</th>
                      <td className="whitespace-nowrap">
                        {isEdit.behance ? (
                          <h4
                            onDoubleClick={() =>
                              setIsEdit({ ...isEdit, behance: !isEdit.behance })
                            }
                            className="  text-lime-500 font-bold uppercase whitespace-nowrap my-0"
                          >
                            {getInfo.behance}
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
                    <h4 className=" bg-lime-500 rounded-md px-3 py-1 ml-8 inline-block text-white uppercase">
                      Hello!
                    </h4>
                  </div>
                </div>
                <div className="col-span-9">
                  <div className=" space-y-5 text-lime-500">
                    {isEdit.aboutme ? (
                      <p
                        onDoubleClick={() =>
                          setIsEdit({ ...isEdit, aboutme: !isEdit.aboutme })
                        }
                        className=" text-lime-500"
                      >
                        {getInfo.aboutme}
                      </p>
                    ) : (
                      <TextArea
                      rows='5'
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

              {/* Experience */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Experience</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9 border-b">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3 border-l border-lime-500 ml-8">
                    <div className=" flex items-center gap-3 -ml-1">
                      <div className="w-2 h-2 rounded-full bg-lime-500"></div>
                      <h4>2014-2018</h4>
                    </div>
                  </div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4 className="">Developer</h4>
                        <h6 className=" text-xs text-slate-700">
                          Graphic Designer
                        </h6>
                      </div>
                      <div className="col-span-9">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Repellat fugit, perspiciatis nemo eos debitis
                          corporis ipsum asperiores dolore impedit praesentium
                          laboriosam, voluptate dicta, molestiae dignissimos
                          iusto et quam? Voluptatum, vel!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Skills */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Design Skills</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3"></div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Developer</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Skills */}
              <div className="">
                <div className=" grid grid-cols-12">
                  <div className="col-span-3">
                    <h4 className="text-lime-500 uppercase my-0">
                      <i className="bi bi-star"></i>{" "}
                      <span className=" ml-3">Social Skills</span>
                    </h4>
                  </div>

                  <div className="col-span-9">
                    <div className=" h-px w-full bg-lime-500 mt-2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  <div className="col-span-3"></div>

                  <div className=" col-span-9">
                    <div className=" grid grid-cols-12">
                      <div className=" col-span-3">
                        <h4>Teamwork</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Independent work</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Smart work</h4>
                      </div>
                      <div className=" col-span-3">
                        <h4>Lightweight</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button onClick={handlePrint}>Print</button>
        </div>
      </div>
    </>
  );
};

export default Main;
