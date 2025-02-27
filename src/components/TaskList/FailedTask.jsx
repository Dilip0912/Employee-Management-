import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-2 bg-yellow-700 rounded-xl font-semibold">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-full">High</h3>
        <h4 className="text-m">{data.taskDate}</h4>
      </div>
      <h2 className="text-xl font-extrabold px-3 mt-4 py-1 rounded">
      {data.taskTitle}
      </h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
