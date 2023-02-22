import React from "react";

const Chip = ({ label }) => {
  return (
    <p className="w-fit rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-3 text-center text-xs font-bold capitalize text-white ">
      {label}
    </p>
  );
};

export default Chip;
