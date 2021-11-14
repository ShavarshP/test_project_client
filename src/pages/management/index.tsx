import React from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CreateUsers from "./components/createUsers";
import UserList from "./components/userList";
import styles from "./style.module.css";

export interface user {
  name: string;
  plan: string;
  visits: number;
  click: number;
  id: string;
}

function createData(
  name: string,
  plan: string,
  visits: number,
  click: number,
  id: string
) {
  return { name, plan, visits, click, id };
}

const Management: React.FC = () => {
  let dat = [{ name: "....loading", plan: "0", visits: 0, click: 0, id: "" }];
  const { allUsers, adminLoading } = useTypedSelector((state) => state.admin);
  const { getAllUserData } = useActions();

  if (!adminLoading) {
    getAllUserData();
  } else {
    dat = allUsers.map((item) =>
      createData(
        item.userName,
        item.billingPlan,
        item.visits,
        item.Click,
        item._id
      )
    );
  }
  return (
    <>
      <div className={styles.container}>
        <CreateUsers />
        <UserList data={dat} />
      </div>
    </>
  );
};

export default Management;
