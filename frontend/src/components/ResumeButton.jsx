import React from "react";

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MansoorResume.pdf";
    link.download = "Mansoor's Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      My Resume
    </button>
  );
};

export default ResumeButton;
