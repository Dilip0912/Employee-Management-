import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-2 bg-red-500 rounded-xl font-semibold">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-full">High</h3>
        <h4 className="text-m">25 freb 2025</h4>
      </div>
      <h2 className="text-xl font-extrabold px-3 mt-4 py-1 rounded">
        Make A Presentation
      </h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        provident similique quas? Quibusdam accusamus necessitatibus, recusandae
        ipsa amet et incidunt?
      </p>
      <div className="flex justify-between mt-3">
        <button className="bg-green-500 py-1 px-2 text-sm">Mark as completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
