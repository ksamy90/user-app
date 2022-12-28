import UserItem from "./UserItem";
import styles from "../css/UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={styles.list}>
      {props.users.map((user, index) => {
        return <UserItem key={index} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
