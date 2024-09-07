import { useState } from "react";
import { WorkingProcessData } from "../Utils/WorkingProcessData";
import PlusIcon from "../assets/plus-icon.png";
import MinusIcon from "../assets/minus-icon.png";

const WorkingProcess = () => {
  const [activeItem, setActiveItem] = useState(0);
  const handleClickItem = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };
  return (
    <section>
      <div className="max-w-[1440px] mx-auto sm:px-6 lg:px-12 py-12 md:py-14   ">
        {/* Working Process description */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8  mb-6 md:mb-12">
          <h2 className="tracking-wide md:tracking-widest rounded-md py-2 px-4 bg-primary text-2xl font-bold ">
            Our Working Process
          </h2>
          <p className="text-center  md:text-justify">
            Step-by-Step Guide to Achieving <br/>
            Your Business Goals
          </p>
          
        </div>

        {/* Question and Answer Accordion */}
        <div className="p-2 mx-1  space-y-6">
          {WorkingProcessData.map((item, index) => (
            <div
              onClick={() => handleClickItem(index)}
              key={index}
              className={`transition-all duration-800 ease-in cursor-pointer rounded-3xl md:rounded-[48px] shadow-md shadow-gray-900 py-4 md:py-8 ${
                activeItem === index ? "bg-primary" : " "
              }`}
            >
              {/* Question */}
              <div className="flex justify-between items-center md:py-4 px-2  md:mx-12">
                <div className="flex justify-between gap-2 md:gap-4 text-lg md:text-2xl font-medium ">
                  <h2>0{index + 1}</h2> <h2>{item.question}</h2>
                </div>
                <div>
                  {activeItem === index ? (
                    <img
                      className="size-7 sm:size-10"
                      src={MinusIcon}
                      alt="MinusIcon"
                    />
                  ) : (
                    <img
                      className="size-7 sm:size-10"
                      src={PlusIcon}
                      alt="PlusIcon"
                    />
                  )}
                </div>
              </div>

              {/* Answer */}
              {activeItem === index && (
                <div className="pt-6 md:pt-2 ">
                  <p className="pt-4 font-lg  md:font-medium mx-4 md:mx-12  border-t-2 border-gray-800  md:text-justify">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
