import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import styles from "./css/App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = (user) => {
    setUsers([...users, user]);
  };
  const fetchUsers = localStorage.getItem("users");

  useEffect(() => {
    const updatedUsers = JSON.parse(fetchUsers);
    setUsers(updatedUsers);
  }, [fetchUsers]);

  useEffect(() => {
    const data = JSON.stringify(users);
    if (users.length > 0) {
      localStorage.setItem("users", data);
    }
  }, [users]);

  return (
    <div>
      <div className={styles.App}>
        <UserForm addUser={addUsers} />
      </div>
      <div>{users.length && <UsersList users={users} />}</div>
    </div>
  );
}

export default App;
