import { servicesData } from "../Utils/ServicesData";
import icon from "../assets/services-img/Icon.png";
import icon2 from "../assets/services-img/Icon2.png";

const Services = () => {
  return (
    <section id="services" className=" md:pt-12 pb-16 bg ">
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-12 ">
        {/* service description */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 md:w-11/12 lg:w-7/12 mb-12">
          <h2 className="tracking-widest rounded-md py-2 px-4 bg-primary text-2xl font-bold ">
            Services
          </h2>
          <p className="text-justify ">
            At our digital marketing agency, we provide a variety of services
            designed to drive business growth and success in the online space.
            Our offerings include:
          </p>
        </div>

        {/* services card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`rounded-md md:rounded-[48px] flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between  gap-10 p-6 md:p-12 ${item.backgroundColor}`}
            >
              {/* Left side */}
              <div className="flex flex-1 flex-col justify-between gap-6">
                <button
                  className={`text-lg font-medium py-3 px-2 rounded-md ${item.titleBgColor}`}
                >
                  {item.title}
                </button>
                <p
                  className={`${
                    item.backgroundColor === "bg-[#000000]"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {item.description}
                </p>
                <div className="space-x-4">
                  {item.backgroundColor === "bg-[#000000]" ? (
                    <img
                      className="size-8 inline-block"
                      src={icon2}
                      alt="icon"
                    />
                  ) : (
                    <img
                      className="size-8 inline-block"
                      src={icon}
                      alt="icon"
                    />
                  )}

                  <a
                    href="#"
                    className={`text-lg font-medium ${
                      item.backgroundColor === "bg-[#000000]"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
              {/* right side */}
              <div className="flex-1 order-first sm:order-last md:order-first xl:order-last">
                <img
                  className="object-contain w-full max-h-48"
                  src={item.image}
                  alt="card-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
