import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 border border-black m-4 w-56 h-96">
      <div>
        <div className="w-48 bg-slate-200 h-32" />
      </div>
      <div className="py-3">
        <h2 className="h-16 bg-slate-200 w-auto"></h2>
        <div>
          <span className="h-16 bg-slate-200"> </span>
          <span className="h-16 bg-slate-200"></span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Shimmer;
