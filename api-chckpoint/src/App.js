import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const listOfUsers = await fetchUsers();
      setListOfUsers(listOfUsers);
    };
    getUsers();
  }, []);

  const fetchUsers = async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let data = res.data;
    return data;
  };

  return (
    <div className="App">
      <UserList listOfUsers={listOfUsers} />
    </div>
  );
}

export default App;
