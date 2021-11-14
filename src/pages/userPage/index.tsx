import React from "react";
import styles from "./style.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const UserPage: React.FC = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { updateClickCount } = useActions();

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name
        </Typography>
        <Typography variant="h5" component="div">
          {user.userName}
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          billing plan
        </Typography>
        <Typography variant="h5">{user.billingPlan}</Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <div>
      <h2>admin mail admin@gmail.com password Q12345678</h2>
      <div className={styles.container}>
        <div>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </div>
        <div style={{ padding: "12px" }}>
          <b style={{ fontSize: "20px" }}>
            number of button presses <h2>{user.Click}</h2>
          </b>

          <Button
            variant="contained"
            color="primary"
            onClick={updateClickCount}
          >
            Button
          </Button>
        </div>
      </div>
      <br />
      <Button variant="contained" color="primary">
        log out
      </Button>
    </div>
  );
};

export default UserPage;
