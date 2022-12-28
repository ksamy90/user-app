import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import styles from "./css/App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const addUsers = (user) => {
    setUsers([...users, user]);
  };

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
