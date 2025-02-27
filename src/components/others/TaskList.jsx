import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import FailedTask from "../TaskList/FailedTask";
import CompleteTask from "../TaskList/CompleteTask";

const TaskList = ({ data }) => {


  return (
    <div
      id="tasklist"
      className="flex items-center overflow-x-auto justify-start gap-5 flex-nowrap h-[40%] w-full mt-10 p-2"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask data={elem} key={idx}/>;
        }
        if (elem.newTask) {
          return <NewTask data={elem} key={idx}/>;
        }
        if (elem.completed) {
          return <CompleteTask data={elem} key={idx}/>;
        }
        if (elem.failed) {
          return <FailedTask data={elem} key={idx}/>;
        }
      })}

    </div>
  );
};

export default TaskList;
