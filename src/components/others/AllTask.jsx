import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div
      id="alltask"
      className="bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div className="">
        {authData.employees.map((elem) => {
          return <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-white">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-400">
              {elem.taskCounts.failed}
            </h5>
          </div>;
        })}
      </div>
    </div>
  );
};

export default AllTask;
