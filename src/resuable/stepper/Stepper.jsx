"use client";
import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const CustomStepper = ({ currentStep = 1 }) => {
    const steps = [
        'Select Method',
        'Assessment',
        'Results'
    ];
    
    return (
        <div className="w-full py-8 px-4">
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