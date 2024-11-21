import React, { useEffect, useState } from "react";
import GitHubAvatar from "./GithubAvatar";
import "./Navbar.css";

const Navbar = () => {
  const [showAvatar, setShowAvatar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowAvatar(false);
      } else {
        setShowAvatar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 w-full p-0 flex justify-between items-center sticky top-0 z-50 border-b-white border-7 border border-t-0 border-l-0 border-r-0">
      <div className="flex-1 ml-2 transition-opacity duration-500 ease-in-out transform">
        {showAvatar && (
          <div className="opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-0">
            <GitHubAvatar />
          </div>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <a className="btn btn-ghost text-xl" href="#aboutme">
          About
        </a>
        <a className="btn btn-ghost text-xl" href="#featuredprojects">
          Projects
        </a>
        <a className="btn btn-ghost text-xl" href="#contactme">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
