import { AppBar, Box, Toolbar, Typography } from "@mui/material"

export const HeaderPostal = () => {
    return (<AppBar
        position="static"
        sx={{
            background: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
            borderRadius: '24px 24px 0 0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}
    >
        <Toolbar
            sx={{
                flexDirection: 'column',
                alignItems: 'center',
                py: 3,
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 24,
                    fontSize: '3rem'
                }}
            >
                🎅
            </Box>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 1,
                    textShadow: '3px 3px 6px rgba(0,0,0,0.4)'
                }}
            >
                🎄 Creador de Postales Navideñas ✨
            </Typography>

            <Typography
                variant="h6"
                component="p"
                sx={{
                    opacity: 0.95,
                    textAlign: 'center',
                    fontWeight: 400
                }}
            >
                Diseña, escribe y envía tus mejores deseos
            </Typography>
        </Toolbar>
    </AppBar>)
}