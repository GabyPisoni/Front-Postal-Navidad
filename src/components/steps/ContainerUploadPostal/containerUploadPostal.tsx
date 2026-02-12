import Configuration from "@/components/steps/ContainerUploadPostal/components/configuration";
import PaletteColor from "@/components/steps/ContainerUploadPostal/components/paletteColor";
import SlideBar from "@/components/steps/ContainerUploadPostal/components/slideBar";
import StickerContainer from "@/components/steps/ContainerUploadPostal/components/stickerContainer";
import ToolPicture from "@/components/steps/ContainerUploadPostal/components/toolPicture";
import { Box } from "@mui/material";

const ContainerUploadPostal = () => {
    return (
        <Box sx={{ display: 'flex', gap: 3, mb: 2, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: { md: 1 } }}>
                <PaletteColor />
                <ToolPicture />
                <Configuration />
                <StickerContainer />
            </Box>
            <Box sx={{ display: 'flex', flex: { md: 3 }, minHeight: '400px' }}>
                <SlideBar />
            </Box>
        </Box>
    );
};
export default ContainerUploadPostal;