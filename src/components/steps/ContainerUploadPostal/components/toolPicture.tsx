"use client";
import { useState } from "react";
import { IconButton, Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import PaletteIcon from "@mui/icons-material/Palette";
import DeleteIcon from '@mui/icons-material/Delete';
import BrushIcon from '@mui/icons-material/Brush';
import CleaningServicesTwoToneIcon from '@mui/icons-material/CleaningServicesTwoTone';
import HandymanIcon from '@mui/icons-material/Handyman';
const tools = [
  { name: "Pincel", icon: BrushIcon },
  { name: "Borrador", icon: CleaningServicesTwoToneIcon },
  { name: "Spray", icon: PaletteIcon },
  { name: "Limpiar", icon: DeleteIcon },
];

const ToolPicture = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <Box sx={{ padding: "12px" }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: "20px" }}>
        <HandymanIcon sx={{ color: "#C41E3A", fontSize: 24 }} />
        <Typography variant="h6" sx={{ color: "#C41E3A", fontWeight: 600 }}>
          Herramientas 
        </Typography>
      </Stack>
      <Grid container spacing={0.5} sx={{ marginBottom: "20px", maxWidth: "250px" }}>
        {tools.map((color) => {
          const IconComponent = color.icon;
          const isSelected = selectedColor === color.name;
          return (
          <Grid key={color.name} size={6} sx={{ padding: "4px" }} alignItems="inherit" justifyContent="center">
            <IconButton
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
              sx={{
                width: 112,
                height: 96,
                padding: "8px",
                border: "2px solid",
                borderColor: isSelected ? "#2b0b3f" : "#dee2e6",
                backgroundColor: isSelected ? "#2b0b3f" : "#ffffff",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "0.85em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                color: isSelected ? "#ffffff" : "#111111",
                "&:hover": {
                  backgroundColor: "#c31432",
                  borderColor: "#c31432",
                  color: "#ffffff",
                  transform: "scale(1.05)",
                },
              }}

            >
              <IconComponent sx={{ fontSize: 26 }} />
              <Typography variant="body2" sx={{ color: "inherit" }}>
                {color.name}  
              </Typography>
            </IconButton>
          </Grid>
          );
        })}
      </Grid>
      {selectedColor && (
        <Typography variant="body2" sx={{ color: "#666" }}>
          Herramienta seleccionado: <strong>{selectedColor}</strong>
        </Typography>
      )}
    </Box>
  );
};

export default ToolPicture;