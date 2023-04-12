import React from "react";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont backdrop-blur-sm bg-opacity-95">
      <div>
        <a href="#">

        <h3 className="md:text-1xl font-bold">
          <span className="text-designColor">{"</ "}</span>
          WUBE
          <span className="text-designColor">{" >"}</span>
        </h3>
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
