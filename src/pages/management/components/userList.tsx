import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";

export interface user {
  name: string;
  plan: string;
  visits: number;
  click: number;
  id: string;
}

interface userData {
  data: user[];
}

const UserList: React.FC<userData> = ({ data }) => {
  const rows = data;
  return (
    <TableContainer component={Paper} style={{ height: "300px" }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Billing Plan</TableCell>
            <TableCell align="right">visits</TableCell>
            <TableCell align="right">Click</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.plan}</TableCell>
              <TableCell align="right">{row.visits}</TableCell>
              <TableCell align="right">{row.click}</TableCell>
              <TableCell
                onClick={() => {
                  console.log(row.id);
                }}
                component="th"
                scope="row"
                style={{ marginRight: "-20px", cursor: "pointer" }}
              >
                <EditIcon color="primary" />
              </TableCell>
              <TableCell
                onClick={() => {
                  console.log(row.id);
                }}
                component="th"
                scope="row"
                style={{
                  width: "30px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
              >
                <DeleteIcon color="secondary" />
              </TableCell>

              {/* <TableCell component="th" scope="row"></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
