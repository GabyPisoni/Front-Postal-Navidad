import ParkIcon from "@mui/icons-material/Park";
import ChurchIcon from "@mui/icons-material/Church";
import ImageIcon from "@mui/icons-material/Image";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import StarIcon from "@mui/icons-material/Star";
import PaletteIcon from "@mui/icons-material/Palette";
import { Typography, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const itemStamp = [
  { id: uuidv4(), icon: ParkIcon },
  { id: uuidv4(), icon: ChurchIcon },
  { id: uuidv4(), icon: ImageIcon },
  { id: uuidv4(), icon: TheaterComedyIcon },
  { id: uuidv4(), icon: StarIcon },
  { id: uuidv4(), icon: PaletteIcon },
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
        {itemStamp.map((stamp) => {
          const IconComponent = stamp.icon;
          return (
            <Box
              key={stamp.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "3px solid #dee2e6",
                borderRadius: "10px",
              }}
            >
              <IconComponent sx={{ fontSize: 100, color: "#667eea" }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default GridStamp;
