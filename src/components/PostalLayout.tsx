"use client";
import { Box } from "@mui/material";
import { HeaderPostal } from "./commons/headerPostal";
import { ProgressBar } from "./commons/progressBar";
import Footer from "./commons/footer";
import React from "react";
import ContainerUploadPostal from "./steps/ContainerUploadPostal/containerUploadPostal";
import ContainerFormPostal from "./steps/ContainerFormPostal/containerFormPostal";
import ContainerReviewPostal from "./steps/ContainerReviewPostal/containerReviewPostal";
import { useAppSelector } from "@/hooks";
export const PostalLayout = () => {
    const [stepState,setStepState] = React.useState(1);
const currentStep = useAppSelector((state:any) => (
    state.stepper.currentStep));
return (
        <Box sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: "20px"
        }}>
            <HeaderPostal />
            <Box sx={{ backgroundColor: '#ffffff', p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <ProgressBar />
                </Box>

                {currentStep === 0 && <ContainerUploadPostal />}
                {currentStep === 1 && <ContainerFormPostal />}
                {currentStep === 2 && <ContainerReviewPostal setStepState={setStepState}/>}
                <Footer/>
            </Box>
        </Box>
    );
};