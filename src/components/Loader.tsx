import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="w-full min-h-[200px] flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">

        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-sky-100 rounded-full"></div>
        </div>

        <p className="text-sm font-medium text-sky-700 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
