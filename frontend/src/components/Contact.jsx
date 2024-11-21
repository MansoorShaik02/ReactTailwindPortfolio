import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full  bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl mb-6">Contact Me</h2>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/shaik-mansoor-ahamed-73468124a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:mansoorshaik7b@gmail.com"
            className="text-4xl hover:text-red-500"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
