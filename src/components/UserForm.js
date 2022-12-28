import { useState } from "react";
import styles from "../css/UserForm.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });
  const [error, setError] = useState("");

  const changeName = (evt) => {
    setUser((prevState) => {
      return { ...prevState, username: evt.target.value };
    });
  };
  const changeAge = (evt) => {
    setUser((prevState) => {
      return { ...prevState, age: evt.target.value };
    });
  };
  const submitChange = (evt) => {
    evt.preventDefault();
    if (user.username.length === 0 || user.age.length === 0) {
      setError("please enter valid values");
      return;
    } else if (user.age < 0) {
      setError("age can only be zero or greater than zero");
      return;
    }
    props.addUser(user);
    setUser({ username: "", age: "" });
    setError("");
  };
  const changeError = () => {
    setError("");
  };

  return (
    <div className={styles.form}>
      {error && (
        <div className={styles.error}>
          <div>
            <div className={styles.invalid}></div>
            <p>{error}</p>{" "}
            <button onClick={changeError} className={styles.button}>
              OK
            </button>
          </div>
        </div>
      )}
      <form onSubmit={submitChange}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={user.username}
            placeholder="username"
            onChange={changeName}
          />
        </div>
        <div className={styles.age}>
          <label htmlFor="Age">Age (Years)</label>
          <input
            type="number"
            value={user.age}
            placeholder="age"
            onChange={changeAge}
          />
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
