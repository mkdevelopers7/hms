import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white mb-[70px] w-full h-[71px] flex items-center">
      <div className="px-6 w-full">
        <div className="flex h-18 md:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mr-15">
            <img src="/logo.png" alt="logo" className="h-[40px]" />
          </div>

          <div className="hidden md:flex md:items-center md:gap-[14px] lg:gap-9 text-black text-[14px] mt-1">
            {[
              "Services",
              "Solutions",
              "Specialties",
              "Domain Area",
              "Resources",
              "About Us",
            ].map((label, i) => (
              <a
                key={label}
                href="#"
                className={`hover:text-primary-hover text-[15px]/[100%] tracking-normal font-[400]`}
              >
                {label}
              </a>
            ))}

            <a
              href="#"
              className="bg-primary text-white py-[10px] px-[24px] hover:bg-primary-hover -mt-1 ml-[50px] w-[160px] h-[41px] text-center"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center justify-center gap-5">
            <a
              href="#"
              className="bg-primary text-slate-50 text-sm font-semibold py-[6px] px-[18px] rounded-[5px] hover:bg-primary-hover"
            >
              Inverster Login
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 hover:text-primary-hover text-primary focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <HiXMark className="h-8 w-8" />
              ) : (
                <HiBars3 className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-4 text-primary">
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Careers
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Investment Strategies
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            FAQ's
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            {/* <HiOutlineEnvelope className="h-5 w-5" /> */}
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
