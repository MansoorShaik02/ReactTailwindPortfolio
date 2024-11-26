import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FloatingLinks = () => {
  return (
    <div
      className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 bg-gray-800 p-2 rounded-r-md shadow-lg"
      style={{ zIndex: 1000 }}
    >
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shaik-mansoor-ahamed-73468124a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
      >
        <FaLinkedin size={30} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/MansoorShaik02"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-transform transform hover:scale-110"
      >
        <FaGithub size={30} />
      </a>

      {/* Email */}
    </div>
  );
};

export default FloatingLinks;
