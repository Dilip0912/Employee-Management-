import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../others/TaskList";

const EmployeeDashboard = ({ data,setUser }) => {
  // console.log(data);
  return (
    <div>
      <div className="p-10 bg-slate-800 h-screen ">
        <Header setUser={setUser} data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
