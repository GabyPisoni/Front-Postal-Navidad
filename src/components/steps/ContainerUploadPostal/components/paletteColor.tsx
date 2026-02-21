"use client";
import { useState } from "react";
import { IconButton, Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import PaletteIcon from "@mui/icons-material/Palette";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setColor } from "@/features/stepDataSlices";

const colors = [
  { name: "Rojo", hex: "#C41E3A" },
  { name: "Verde", hex: "#2D5016" },
  { name: "Blanco", hex: "#F5F5F5" },
  { name: "Amarillo", hex: "#FFD700" },
  { name: "Azul Marino", hex: "#1A3A5C" },
  { name: "Negro", hex: "#000000" },
  { name: "Coral", hex: "#FF6B7A" },
  { name: "Cyan", hex: "#4DD0E1" },
];

const PaletteColor = () => {

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const dispatchStepData = useAppDispatch();
const colorSelected = useAppSelector((state:any) => state.stepData.color);
  const handleColorSelect = (colorHex: string) => {
    dispatchStepData(setColor(colorHex));
  };
  return (
    <Box sx={{ padding: "12px" }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: "20px" }}>
        <PaletteIcon sx={{ color: "#C41E3A", fontSize: 24 }} />
        <Typography variant="h6" sx={{ color: "#C41E3A", fontWeight: 600 }}>
          Colores 
        </Typography>
      </Stack>
      <Grid container spacing={1} sx={{ marginBottom: "20px", maxWidth: "280px" }}>
        {colors.map((color) => (
          <Grid key={color.hex} size={3}>
            <IconButton
              onClick={() => handleColorSelect(color.hex)}
              title={color.name}
              sx={{
                width: 60,
                height: 60,
                borderRadius: 1.5,
                backgroundColor: color.hex,
                border: selectedColor === color.hex ? "3px solid #333" : "3px solid transparent",
                boxShadow: selectedColor === color.hex ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: color.hex,
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
      {selectedColor && (
        <Typography variant="body2" sx={{ color: "#666" }}>
          Color seleccionado: <strong>{colorSelected}</strong>
        </Typography>
      )}
    </Box>
  );
};

export default PaletteColor;