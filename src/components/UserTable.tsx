
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
  Link
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}



interface UserTableProps {
  onSelectUser: (user: User) => void; 
}

const UserTable: React.FC<UserTableProps> = ({ onSelectUser }) => {
  const { users, loading, error } = useContext(UserContext);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <div>Error loading users.</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: User,index:number) => ( // Remove type assertion to UserType
            <StyledTableRow
              key={user.id}
              onClick={() => onSelectUser(user)}
              sx={{ cursor: "pointer" }}
            >
              <StyledTableCell>{index+1}</StyledTableCell>
              <StyledTableCell>{user.name}</StyledTableCell>
              <StyledTableCell><Link href={'mailto:'+user.email} target="_blank" rel="noopener">{user.email}</Link></StyledTableCell>
              <StyledTableCell>{user.company?.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
