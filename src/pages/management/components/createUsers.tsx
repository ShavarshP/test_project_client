import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
