import { Container, TextareaAutosize, TextField } from "@mui/material";
import GridStamp from "./gridStamp";

const ContainerFormPostal = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        label="De: (Tu nombre)"
        placeholder="Ej: Juan Pérez"
        fullWidth
        sx={{ mb: "25px" , borderRadius:"12px"}}
      ></TextField>
      <TextField
        label="Para:(Destinatario)"
        placeholder="Ej: María Gómez"
        fullWidth
        sx={{ mb: "25px" , borderRadius:"12px"}}
      ></TextField>
      <TextareaAutosize
        aria-label="Mensaje"
        minRows={12}
        placeholder="Escribe tu mensaje aquí..."
        style={{ width: "100%", marginBottom: "25px", borderRadius:"12px" }}
      ></TextareaAutosize>
      <GridStamp />
    </Container>
  );
};

export default ContainerFormPostal;
