import { CaseStudiesData } from "../Utils/CaseStudiesData";
import arrow from "../assets/arrow.png"

const CaseStudies = () => {
  return (
    <section id="use-cases">
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-20   ">
        {/* case studies description */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8  mb-6 md:mb-12">
          <h2 className="tracking-widest rounded-md py-2 px-4 bg-primary text-2xl font-bold ">
            Case Studies
          </h2>
          <p className="text-center md:text-justify md:w-5/12 ">
            Discover in-depth examples of how our digital marketing strategies
            have delivered outstanding results for our clients.
          </p>
        </div>

        {/* case studies card */}
        <div className="bg-black opacity-90 rounded-md md:rounded-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-12">
          {CaseStudiesData.map((item, index) => (
            <div
              key={index}
              className={`py-8 md:py-4 px-5 md:px-10 space-y-5 md:space-y-10 flex flex-col justify-between ${
                item.title === "Case study 2" || item.title === "Case study 3"
                  ? "lg:border-l"
                  : ""
              }`}
            >
              <div>
                <h2 className="text-white text-xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-300">{item.description}</p>
              </div>
              <div className="mt-auto">
                <a href="#" className="text-primary flex items-center">
                  Learn More{" "}
                  <img
                    src={arrow}
                    alt="arrow icon"
                    className="inline-block ml-3"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;