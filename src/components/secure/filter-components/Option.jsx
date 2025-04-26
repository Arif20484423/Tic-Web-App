import React from "react";

const Option = ({ children }) => {
  return (
    <div className="block px-4 py-2 text-[12px] text-[var(--textColor-primary)] bg-white hover:bg-gray-100">
      {children}
    </div>
  );
};

export default Option;
