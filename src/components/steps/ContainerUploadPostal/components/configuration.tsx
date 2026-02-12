"use client";
import {  Box, Typography, Stack, Slider } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction'; 

const Configuration = () => {
  return (
    <Box sx={{ padding: "12px" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ConstructionIcon sx={{ color: "#C41E3A", fontSize: 24 }} />
        <Typography variant="h6" sx={{ color: "#C41E3A", fontWeight: 600 }}>Configuracion</Typography>
      </Stack>
      <Box sx={{ marginTop: "20px", marginBottom: "20px", maxWidth: "250px" }}>
      <Slider min={0} max={100} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    </Box>
  );
};

export default Configuration;