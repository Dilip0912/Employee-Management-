import React, { useRef, useState } from "react";

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef=useRef();
    const passwordRef=useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        let currEmail=emailRef.current.value;
        let currPassword=passwordRef.current.value;
        emailRef.current.value="";
        passwordRef.current.value="";
        console.log(currEmail,currPassword);
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center border">
      <div className="border-2 border-blue-100  p-20 rounded-2xl">
        <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center justify-center">
            <input ref={emailRef} className="text-white bg-transparent border-2 border-sky-500 rounded-full px-3 py-3 placeholder:text-grey"  required type="email" placeholder="Enter Your email"/>
            <input ref={passwordRef} className="text-white bg-transparent border-2 border-sky-500 rounded-full px-3 py-3 placeholder:text-grey mt-3" required type="password" placeholder="Enter Your password" />
            <button className="text-black bg-green-200 border-2 border-sky-500 rounded-3xl px-3 py-3 placeholder:text-grey mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
