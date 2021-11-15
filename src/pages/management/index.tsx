import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useSearch } from "../../hooks/useSearch";
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

const Management: React.FC = () => {
  const [check, setCheck] = useState<{ [key: string]: boolean }>({
    standard: true,
    comfort: true,
    premium: true,
  });
  const [searchData, setSearchData] = useState<string>("");
  const [dat, setData] = useState([
    { name: "....loading", plan: "0", visits: 0, click: 0, id: "" },
  ]);

  const { allUsers, adminLoading } = useTypedSelector((state) => state.admin);
  const { getAllUserData, UserLogout, setLoading } = useActions();
  const { searchFunc } = useSearch();
  const checked = (prop: string, checked: boolean) => {
    setCheck({ ...check, [prop]: checked });
  };

  const allUserData = allUsers.map((item) => {
    return {
      name: item.userName,
      plan: item.billingPlan,
      visits: item.visits,
      click: item.Click,
      id: item._id,
    };
  });

  if (!adminLoading) {
    getAllUserData();
  } else {
    if (!(dat.length < 1) && dat[0].id === "") {
      setData(allUserData);
    }
  }
  useEffect(() => {
    if (dat.length === 0 || !(dat[0].id === "")) {
      setData(
        allUserData.filter(
          (item) => check[item.plan] && searchFunc(searchData, item.name)
        )
      );
    }
  }, [check.comfort, check.premium, check.standard, searchData]);

  const lookFor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <CreateUsers check={check} checked={checked} lookFor={lookFor} />
        <UserList data={dat} />
        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await UserLogout();
            setLoading(false);
          }}
        >
          log out
        </Button>
      </div>
    </>
  );
};

export default Management;
