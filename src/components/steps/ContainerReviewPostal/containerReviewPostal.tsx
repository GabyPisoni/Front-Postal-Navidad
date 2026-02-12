"use client";
import { Box, Paper, Typography, Card, CardContent } from "@mui/material";

interface ContainerReviewPostalProps {
  setStepState: (step: number) => void;
}

const ContainerReviewPostal = ({ setStepState }: ContainerReviewPostalProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#667eea",
          textAlign: "center",
          mb: 2,
        }}
      >
        🎉 ¡Tu Postal está Lista!
      </Typography>
      <Paper
        elevation={8}
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: 4,
          borderRadius: 4,
          maxWidth: 600,
          width: "100%",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)",
          },
        }}
        onClick={() => setStepState(2)}
      >
        <Card
          sx={{
            backgroundColor: "#ffffff",
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 4,
            borderRadius: 2,
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent sx={{ padding: 0 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#e53e3e",
                fontSize: "1rem",
              }}
            >
              De:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#e53e3e",
                fontSize: "1rem",
              }}
            >
              Para:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#e53e3e",
                fontSize: "1rem",
              }}
            >
              Mensaje:
            </Typography>
          </CardContent>
          <Typography
            variant="body2"
            sx={{
              textAlign: "right",
              mt: 4,
              fontStyle: "italic",
              color: "#667eea",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            Estampilla
          </Typography>
        </Card>
        <Typography
          variant="body2"
          sx={{
            color: "#fff7f7",
            textAlign: "center",
            fontStyle: "italic",
            maxWidth: 500,
          }}
        >
          Da clic en la postal para editarla y ver el diseño
        </Typography>
      </Paper>
    </Box>
  );
};

export default ContainerReviewPostal;
