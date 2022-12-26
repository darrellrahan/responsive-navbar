import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleIsShow = () => setIsShow(!isShow);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = isShow
      ? `${linksHeight}px`
      : "0px";
  }, [isShow]);

  return (
    <div className="nav-container">
      <div className="start header-collapse">
        <div className="logo">
          <h3>
            Nav<span>bar</span>
          </h3>
        </div>
        <div className="toggle-btn">
          <button onClick={toggleIsShow}>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="center" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((e, i) => {
            const { text } = e;
            return (
              <li key={i}>
                <a href="#">{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="end">
        <ul className="socials">
          {social.map((e, i) => {
            const { url, icon } = e;
            return (
              <li key={i}>
                <a href={url} target={"_blank"} rel={"noreferrer"}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
