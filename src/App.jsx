import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./util/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState("");
  const [loggedInUserData,setLoggedInUserData]=useState("");

  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    } else if (authData) {
      let employee= authData.employees.find((e)=>email===e.email && e.password===password);
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }
    } else {
      alert("Invalid Credential");
    }
  };


  useEffect(()=>{
    setLocalStorage();
    // getLocalStorage();
  },[])

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user === "admin" ? <AdminDashboard /> : (user==="employee"?<EmployeeDashboard data={loggedInUserData}/>:"")}
    </>
  );
}

export default App;
