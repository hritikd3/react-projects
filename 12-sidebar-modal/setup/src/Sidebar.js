import React from "react";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjIrX_CeWsOckOmcBUtjtTchttf79hF26gCgFCinH8Y5HtPkczK1-F8zWgn9KLU9hHrc&usqp=CAU"
          className="logo"
          alt="coding addict"
        />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
