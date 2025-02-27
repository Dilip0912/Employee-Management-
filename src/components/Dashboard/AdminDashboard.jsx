import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({setUser}) => {
  return (
    <div className="h-screen w-full p-10">
      <Header setUser={setUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
