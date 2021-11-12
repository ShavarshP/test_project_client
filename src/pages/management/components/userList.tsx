import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, plan: string, visits: number, click: number) {
  return { name, plan, visits, click };
}

const rows = [
  createData("Frozen yoghurt", "standard", 31, 24),
  createData("Ice cream sandwich", "standard", 31, 37),
  createData("Eclair", "standard", 31, 24),
  createData("Cupcake", "standard", 31, 67),
  createData("Gingerbread", "standard", 31, 49),
];

const UserList: React.FC = () => {
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
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.plan}</TableCell>
              <TableCell align="right">{row.visits}</TableCell>
              <TableCell align="right">{row.click}</TableCell>
              <button style={{ margin: "7px", cursor: "pointer" }}>edit</button>
              <button
                style={{
                  margin: "7px",
                  backgroundColor: "#ff7c7c",
                  cursor: "pointer",
                }}
              >
                delete
              </button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
