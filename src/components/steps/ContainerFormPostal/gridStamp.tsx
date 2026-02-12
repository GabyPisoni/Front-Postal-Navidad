import ParkIcon from "@mui/icons-material/Park";
import ChurchIcon from "@mui/icons-material/Church";
import ImageIcon from "@mui/icons-material/Image";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import StarIcon from "@mui/icons-material/Star";
import PaletteIcon from "@mui/icons-material/Palette";
import { Typography, Box } from "@mui/material";
const itemStamp = [
  <ParkIcon sx={{ fontSize: 100, color: "#667eea" }} />,
  <ChurchIcon sx={{ fontSize: 100, color: "#667eea" }} />,
  <ImageIcon sx={{ fontSize: 100, color: "#667eea" }} />,
  <TheaterComedyIcon sx={{ fontSize: 100, color: "#667eea" }} />,
  <StarIcon sx={{ fontSize: 100, color: "#667eea" }} />,
  <PaletteIcon sx={{ fontSize: 100, color: "#667eea" }} />,
];
const GridStamp = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: "#be0c0c" }}>
        Selecciona tu estampilla
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          mt: 4,
          px: 2,
        }}
      >
        {itemStamp.map((icon, index) => (
          <Box
            key={index}
             sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid #dee2e6",
              borderRadius: "10px",
            }}
          >
            {icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GridStamp;
