"use client";
import { Box } from "@mui/material";
import { HeaderPostal } from "./commons/headerPostal";
import { ProgressBar } from "./commons/progressBar";

import Footer from "./commons/footer";
import React from "react";
import ContainerUploadPostal from "./steps/ContainerUploadPostal/containerUploadPostal";
import ContainerFormPostal from "./steps/ContainerFormPostal/containerFormPostal";
import ContainerReviewPostal from "./steps/ContainerReviewPostal/containerReviewPostal";
export const PostalLayout = () => {
    const [stepState,setStepState] = React.useState(1);

    return (

        <Box sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: "20px"
        }}>
            <HeaderPostal />
            <Box sx={{ backgroundColor: '#ffffff', p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <ProgressBar />
                </Box>

                {stepState === 1 && <ContainerUploadPostal />}
                {stepState === 2 && <ContainerFormPostal />}
                {stepState === 3 && <ContainerReviewPostal setStepState={setStepState}/>}
                <Footer setStepState={setStepState} stepState={stepState} />
            </Box>
        </Box>
    );
};