import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./util/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState("");
  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      let employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data:employee })
        );
      }
    } else {
      alert("Invalid Credential");
    }
  };

  // useEffect(() => {
  //   setLocalStorage();
  //   // getLocalStorage();
  // }, []);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user === "admin" ? (
        <AdminDashboard setUser={setUser}/>
      ) : user === "employee" ? (
        <EmployeeDashboard setUser={setUser} data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
