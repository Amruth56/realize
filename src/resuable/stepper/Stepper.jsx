"use client";
import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const CustomStepper = ({ currentStep = 0, steps=[] }) => {
    
    return (
        <div className="w-full py-8">
            <MuiStepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </MuiStepper>
        </div>
    );
};

export default CustomStepper;