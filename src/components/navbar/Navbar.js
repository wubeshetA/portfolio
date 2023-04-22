import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setShowMenu(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [menuRef]);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 opacity-95">
      <div className="pl-4">
        <a href="/">
          {" "}
          <h3 className="md:text-2xl ">
            <span className="">{"</"}</span>{" "}
            <span className="text-2xl font-bold text-designColor">WUBE</span>
            <span className="">{">"}</span>{" "}
          </h3>{" "}
        </a>
      </div>
      <div className="pr-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
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

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer "
        >
          <FiMenu />
        </span>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide shadow-shadowOne z-50"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
            >
              <div className="w-full flex backdrop-brightness-0 h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 scrollbar-hide px-4">
                <div className="flex flex-col justify-between gap-8 relative w-full">
                  <div className="flex justify-between w-full border-b-[1px] border-b-gray-600 h-24 top-0 items-center">
                    {/* <img className="w-32" src={logo} alt="logo" /> */}

                    <a href="wubeshet.me" className="">
                      {" "}
                      <h3 className="md:text-2xl ">
                        <span className="">{"</"}</span>{" "}
                        <span className="text-2xl font-bold text-designColor">
                          WUBE
                        </span>
                        <span className="">{">"}</span>{" "}
                      </h3>{" "}
                    </a>
                    {/* <p className="text-sm text-gray-400 mt-2"></p> */}

                    <span
                      onClick={() => setShowMenu(false)}
                      className="text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                    >
                      <MdClose />
                    </span>
                  </div>
                  <ul className="flex flex-col gap-8 justify-around pr-10 mx-10 ">
                    {navLinksdata.map((item) => (
                      <li
                        key={item._id}
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                      >
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="pb-10">
                    <h2 className="text-base uppercase font-titleFont mb-4">
                      Find me on
                    </h2>
                    <div className="flex gap-4">
                      <span className="bannerIcon">
                        <a
                          href="https://www.linkedin.com/in/wubeshet"
                          rel="noreferrer"
                        >
                          <FaLinkedinIn />
                        </a>
                      </span>

                      <span className="bannerIcon">
                        <a
                          href="https://www.github.com/wubeshetA"
                          rel="noreferrer"
                        >
                          <FaGithub />
                        </a>
                      </span>

                      <span className="bannerIcon">
                        <a
                          href="https://www.instagram.com/wubeshet.y"
                          rel="noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </span>
                    </div>
                  </div>

                  {/* <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-6 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose />
                  </span> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
