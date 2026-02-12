"use client";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import PetsIcon from "@mui/icons-material/Pets";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ParkIcon from "@mui/icons-material/Park";
import StarIcon from "@mui/icons-material/Star";
import ConstructionIcon from "@mui/icons-material/Construction";

const stickers = [
  { icon: ParkIcon },
  { icon: StarIcon },
  { icon: SentimentVerySatisfiedIcon },
  { icon: CardGiftcardIcon },
  { icon: AcUnitIcon },
  { icon: SnowshoeingIcon },
  { icon: NotificationsIcon },
  { icon: LocalFireDepartmentIcon },
  { icon: VolunteerActivismIcon },
  { icon: StarIcon },
  { icon: PetsIcon },
  { icon: SentimentVerySatisfiedIcon },
];

const StickerContainer = () => {
  return (
    <Box sx={{ padding: "12px" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ConstructionIcon sx={{ color: "#C41E3A", fontSize: 24 }} />
        <Typography variant="h6" sx={{ color: "#C41E3A", fontWeight: 600 }}>
          Stickers
        </Typography>
      </Stack>

      <Box sx={{ marginTop: "16px", maxWidth: "260px" }}>
        <Grid container spacing={1}>
          {stickers.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Grid key={index} size={3}>
                <IconButton
                  sx={{
                    width: 62,
                    height: 62,
                    borderRadius: "12px",
                    border: "2px solid #E4E7EB",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    color: "#111111",
                    "&:hover": {
                      borderColor: "#C41E3A",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <IconComponent sx={{ fontSize: 24 }} />

                </IconButton>

              </Grid>
            );
          })}

        </Grid>
        <Button
          fullWidth
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px",
            backgroundColor: "#28a745",
            color: "#ffffff",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all 0.3s ease",
            border: "none",
            width: "100%",
            marginTop: "12px",
            "&:hover": { backgroundColor: "#218838" },
          }}
        >
          Subir Imagen
        </Button>
      </Box>
    </Box>
  );
};

export default StickerContainer;