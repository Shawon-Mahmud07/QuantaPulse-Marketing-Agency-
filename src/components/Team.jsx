import { TeamMembersData } from "../Utils/TeamMembersData";
import social from "../assets/Social-icon.png";



const Team = () => {
  return (
    <section id="team" className=" pt-8 lg:pt-12 pb-8 md:pb-16 bg ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 ">
        {/* service description */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 md:w-11/12 lg:w-7/12 mb-12">
          <h2 className="tracking-widest rounded-md py-2 px-4 bg-primary text-2xl font-bold ">
            Team
          </h2>
          <p className=" text-center md:text-justify ">
            Meet the skilled and experienced team behind our <br /> successful
            digital marketing strategies
          </p>
        </div>

        {/* Team Members Card */}
        <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 ">
          {TeamMembersData.map((member, index) => (
            <div
              key={index}
              className=" p-6 sm:p-8 hover:bg-primary transition-colors duration-300 space-y-6 shadow-lg rounded-3xl lg:rounded-[40px] shadow-gray-700 "
            >
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <img 
                    className=" "
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="self-end">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <h4>{member.role}</h4>
                  </div>
                </div>
                <a href="#">
                  <img src={social} alt="" />
                </a>
              </div>
              
              <div >
                <hr className="border-secondary" />
              </div>

              <div>
                <p className="text-sm ">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;