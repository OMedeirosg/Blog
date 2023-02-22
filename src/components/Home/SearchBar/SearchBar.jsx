import React from "react";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className=" mx-auto mt-10 mb-16 w-fit rounded-sm p-2">
      <form className=" flex items-center" onSubmit={formSubmit}>
        <input
          className="rounded-sm border-none bg-slate-100 py-2 px-4  outline-none outline-offset-0 focus:outline-slate-500"
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && (
          <span className="cursor-pointer pl-2" onClick={clearSearch}>
            X
          </span>
        )}
        <button className="ml-2 bg-slate-300 py-2 px-4">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
