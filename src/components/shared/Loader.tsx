import React from "react";

const Loader = () => {
  return (
    <div className="flex-center w-full">
      {/*  this is to load the loader when loading */}
      <img src="/assets/icons/loader.svg" alt="loader" width={24} height={24} />
    </div>
  );
};

export default Loader;