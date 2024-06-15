import React, { useState } from "react";
import { Box } from "@mui/material";
import UserTable from "../components/UserTable";
import UserDetails from "../components/UserDetails";

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

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-center',alignItems:'flex-center'  }}>
      <UserTable onSelectUser={(user: User) => setSelectedUser(user)} />
      <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
    </Box>
  );
};

export default Users;
