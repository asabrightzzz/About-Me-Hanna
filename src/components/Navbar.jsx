import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
    };

    const handleZoomEvent = (e) => {
      setIsHidden(e.detail.isZoomed);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("creativeZoom", handleZoomEvent);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("creativeZoom", handleZoomEvent);
    };
  }, []);

  return (
   <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-500 ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        scrolled 
          ? "bg-primary/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
          : "bg-gradient-to-b from-black/50 to-transparent py-5" 
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt='logo' 
            className='w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]' 
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
            HM &nbsp;
            <span className='sm:block hidden text-[#18c8ff] brightness-125'> | Logically Creative</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#18c8ff]" : "text-white"
              } hover:text-[#18c8ff] text-[18px] font-bold cursor-pointer transition-colors duration-300 relative group drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#18c8ff] shadow-[0_0_8px_#18c8ff] transition-all duration-300 group-hover:w-full ${active === nav.title ? "w-full" : "w-0"}`} />
            </li>
          ))}
        </ul>

        {/* Mobile Navigation*/}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div className="p-1 rounded-md bg-black/20 backdrop-blur-sm border border-white/10">
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary/95 backdrop-blur-lg border border-white/10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl shadow-2xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-colors duration-300 ${
                    active === nav.title ? "text-blue-ace" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;