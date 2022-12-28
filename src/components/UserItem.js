import styles from "../css/UserItem.module.css";

const UserItem = (props) => {
  return (
    <p className={styles.user}>
      {props.user.username} {`(${props.user.age} years old)`}
    </p>
  );
};

export default UserItem;
