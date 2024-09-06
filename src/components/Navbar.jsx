import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const [activeItem, setActiveItem] = useState(" ");
  const handleItemClick = (item) => {
    setActiveItem(item);
    setOpen(!isOpen);
   }

  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];
  return (
    <nav className="shadow-md">
      <div className="relative z-20 h-16 max-w-[1440px] mx-auto flex justify-between  px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="flex justify-center gap-1 items-center">
          <a href="/">
            <img
              className="h-8 w-full"
              src="./logo/logo-avalaunch-icon.png"
              alt="logo"
            />
          </a>
          <p className="text-2xl font-semibold">QuantaPulse</p>
        </div>

        {/* nav items */}
        <div className="hidden md:flex">
          <ul className="flex items-center  lg:gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => handleItemClick(item.name)}
                  className={`text-black ${
                    activeItem == item.name
                      ? "bg-primary underline underline-offset-4"
                      : " "
                  } md:text-sm lg:text-base xl:text-lg p-2  lg:p-2 rounded-md transition-all duration-300 `}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="border xl:text-lg border-black px-2 lg:px-4 py-2  rounded-md hover:bg-primary hover:border-primary transition-all duration-300"
            >
              Request a quote
            </a>
          </ul>
        </div>

        {/* mobile menu */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary"
          >
            {isOpen ? (
              <MdOutlineClose className="size-6" />
            ) : (
              <HiMenuAlt3 className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu items */}
      <div
        className={`z-10 md:hidden absolute w-full ${
          isOpen ? "top-16" : "-top-96"
        } transition-all duration-700 ease-linear  bg-secondary p-6`}
      >
        {isOpen && (
          <ul className="flex items-start flex-col gap-3 ">
            {menuItems.map((item, index) => (
              <li
                onClick={() => handleItemClick(item.name)}
                className={` ${
                  activeItem == item.name ? "bg-primary" : " "
                } w-full py-2 rounded-sm`}
                key={index}
              >
                <a
                  className={`text-white  xl:text-lg px-2 py-2  hover:underline underline-offset-4  `}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        <button className="mt-5 ml-2">
          <a
            onClick={() => setOpen(!isOpen)}
            href="#contact"
            className="border text-white border-white px-4 py-2 hover:border-none hover:outline-none  rounded-md hover:bg-primary transition-all duration-300"
          >
            Request a quote
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
