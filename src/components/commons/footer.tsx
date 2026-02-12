import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import SaveIcon from '@mui/icons-material/Save';

const Footer = ({setStepState, stepState}: {setStepState: (step: number) => void, stepState: number}) => {
const handleNext = () => {
    setStepState( stepState + 1);
}
const handleBack = () => {
    setStepState( stepState - 1);
}
  return (
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                    <Button fullWidth variant="contained" onClick={handleBack} sx={{ 
                        padding: '16px 35px',
                        background: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '1.1em',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flex: 1,
                        justifyContent: 'center',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #a01028 0%, #1a0829 100%)'
                        }
                    }}><ArrowBackIcon />Anterior </Button>
                 {stepState !==3 ? (<Button fullWidth variant="contained" sx={{ 
                        padding: '16px 35px',
                        background: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '1.1em',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flex: 1,
                        justifyContent: 'center',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #a01028 0%, #1a0829 100%)'
                        }
                    }} onClick={handleNext}>Siguiente<ArrowForwardIcon /></Button>
              ):<><Button fullWidth color="success" variant="contained" sx={{ 
                        padding: '16px 35px',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '1.1em',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flex: 1,
                        justifyContent: 'center',
                    
                    }} onClick={handleNext}><AttachEmailIcon />Enviar Postal</Button>
              <Button fullWidth variant="contained" sx={{ 
                        padding: '16px 35px',
                        background: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '1.1em',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flex: 1,
                        justifyContent: 'center',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #a01028 0%, #1a0829 100%)'
                        }
                    }} onClick={handleNext}><SaveIcon/>Descargar</Button>
              </>}     </Stack>
  );
};

export default Footer;