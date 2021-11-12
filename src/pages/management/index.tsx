import React from "react";
// import Button from "@mui/material/Button";
import CreateUsers from "./components/createUsers";
import UserList from "./components/userList";
import styles from "./style.module.css";

const Management: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <CreateUsers />
        <UserList />
      </div>
    </>
  );
};

export default Management;
