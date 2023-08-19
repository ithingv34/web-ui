import React from "react";

const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-gray-400 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">classNameLoading...</span>
    </div>
  );
};

export default Spinner;
