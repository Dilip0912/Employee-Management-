import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { getLocalStorage } from "../../util/LocalStorage";

const CreateTask = () => {

  let newUser={};
  const authData=useContext(AuthContext);
  // const authData=getLocalStorage();

  const data=authData.employees;
  // console.log(data[4].tasks[1]);

  const taskTitleRef=useRef();
  const taskDescriptionRef=useRef();
  const taskDateRef=useRef();
  const categoryRef=useRef();
  const assignToRef=useRef();


  const handleNewUserSubmit=(e)=>{
    e.preventDefault();
    // console.log("Task Created")
    newUser={
      taskTitle:taskTitleRef.current.value,
      taskDescription:taskDescriptionRef.current.value,
      taskDate:taskDateRef.current.value,
      category:categoryRef.current.value,
      active:false,
      newTask: true,
      completed: false,
      failed: false
    }
    // console.log(newUser);
    data.forEach(element => {
      if(assignToRef.current.value===element.firstName){
        element.tasks.push(newUser);
        // console.log(element);
        element.taskCounts.newTask+=1;
        // console.log(element.taskCounts.newTask);
      }
    });
    localStorage.setItem("employees",JSON.stringify(data));
    window.location.reload();
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form onSubmit={(e)=>{
        handleNewUserSubmit(e)
      }} className="flex flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task title</h3>
            <input
            ref={taskTitleRef}
              type="text"
              className="text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input ref={taskDateRef}
              type="Date"
              className="text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
            ref={assignToRef}
              type="text"
              className="text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Emp Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input ref={categoryRef}
              type="text"
              placeholder="Design,dev,etc"
              className="text-sm px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea ref={taskDescriptionRef}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-700 hover:bg-emerald-900 px-5 rounded text-l mt-3 h-10 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
