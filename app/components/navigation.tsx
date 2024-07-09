import { useState } from "react";

const HamburgerButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  const commonClasses =
    "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm";

  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-10 h-10 lg:hidden"
    >
      <span
        className={`${commonClasses} ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`${commonClasses} my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`${commonClasses} ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-white w-full h-20 z-50 px-16">
      <div className="flex justify-between items-center h-20 container m-auto">
        <div>
          <span className="font-semibold">James</span> White
        </div>

        <HamburgerButton isOpen={isOpen} toggle={handleClick} />

        <div className="hidden lg:block relative">
          <ul className="flex gap-6 list-none p-0">
            <li>
              <a href="#about-me">About</a>
            </li>
            {/* <li>Portfolio</li>
            <li>Development Technologies</li> */}
          </ul>
        </div>

        <div
          className={`absolute top-full left-0 w-full container px-16 bg-white shadow-md lg:hidden ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col list-none p-4">
            <li>
              <a href="#about-me" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            {/* Additional menu items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
