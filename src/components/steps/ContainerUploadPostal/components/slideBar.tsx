"use client";
import { Box, Paper } from "@mui/material";

const SlideBar = () => {


  return (
    <Paper elevation={12} sx={{ width: '100%', height: '100%',borderRadius:"20px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <Box   sx={{ width: '70%', height: '70%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',borderRadius:"20px", padding: "20px", boxShadow: 6 }}/>
    </Paper>
  );
};
export default SlideBar;