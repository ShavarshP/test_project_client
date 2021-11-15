import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../components/cssModules";

export interface check {
  standard: boolean;
  comfort: boolean;
  premium: boolean;
}

interface filter {
  check: any | check;
  checked(prop: string, checked: boolean): void;
  lookFor(event: React.ChangeEvent<HTMLInputElement>): void;
}

const CreateUsers: React.FC<filter> = ({ check, checked, lookFor }) => {
  const history = useHistory();

  return (
    <form>
      <Button
        onClick={() => {
          history.push("user_config");
        }}
        variant="contained"
        color="success"
        style={{ margin: "20px" }}
      >
        Add new user
      </Button>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={lookFor}
          />
        </Search>
        <div>
          <FormControlLabel
            value="standard"
            control={
              <Radio
                checked={check.standard}
                onClick={() => {
                  checked("standard", !check.standard);
                }}
              />
            }
            label="standard"
          />
          <FormControlLabel
            value="comfort"
            control={
              <Radio
                checked={check.comfort}
                onClick={() => {
                  checked("comfort", !check.comfort);
                }}
              />
            }
            label="comfort"
          />
          <FormControlLabel
            value="premium"
            control={
              <Radio
                checked={check.premium}
                onClick={() => {
                  checked("premium", !check.premium);
                }}
              />
            }
            label="premium"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateUsers;
