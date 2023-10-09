import React from "react";

const SearchNote = ({ onSearch }) => {
  const searchHandler = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <input
        className="p-2 py-3 border my-3 rounded-lg w-full"
        type="text"
        placeholder="Cari Catatan"
        onChange={searchHandler}
      />
    </>
  );
};

export default SearchNote;
