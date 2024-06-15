
import React from "react";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => (
  <Box sx={{ display:'flex',alignItems: 'center',flexDirection:'center' ,textAlign:'center', alignContent: 'center'}}>
    <Typography sx ={{display:'flex',alignItems: 'center',flexDirection:'center',textAlign:'center'}} variant="h4">Welcome to the Dashboard</Typography>
  </Box>
);

export default Home;
