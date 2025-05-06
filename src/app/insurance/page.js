"use client";
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CustomStepper from '@/resuable/stepper/Stepper'; // Renamed import
import InfoBanner from '@/resuable/infoBanner/InfoBanner';

const AssessmentCard = ({ icon, title, description, features, buttonText }) => (
  <Card className="flex flex-col p-8 bg-white border-1  rounded-xl w-full max-w-md h-auto">
    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
      <img src={icon} alt={title} className="w-6 h-6" />
    </div>
    
    <h2 className="mt-6 text-2xl font-semibold text-gray-900">{title}</h2>
    
    <p className="mt-4 text-base text-gray-600">
      {description}
    </p>
    
    <ul className="mt-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <img src={feature.icon} alt="check" className="w-4 h-4 mr-2" />
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
    
    <Button 
      variant="contained" 
      color="primary" 
      className="mt-auto w-full py-3 px-4 rounded-lg"
    >
      {buttonText}
    </Button>
  </Card>
);

const AssessmentCards = () => {
  const cards = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-7.png",
      title: "Manual Questionnaire Assessment",
      description: "Complete a detailed questionnaire to evaluate your cyber security posture. Perfect for organizations that want a thorough, guided assessment process.",
      features: [
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-8.png", text: "Comprehensive coverage analysis" },
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-9.png", text: "Step-by-step guidance" },
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-10.png", text: "No technical integration required" }
      ],
      buttonText: "Select Manual Assessment"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-11.png", 
      title: "Automated Tool Integration",
      description: "Connect your existing security tools for an automated assessment. Ideal for organizations with established security infrastructure.",
      features: [
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-12.png", text: "Real-time data analysis" },
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-13.png", text: "Continuous monitoring" },
        { icon: "https://dashboard.codeparrot.ai/api/image/Z--rLuGYgKEKiAlX/frame-14.png", text: "Integration with existing tools" }
      ],
      buttonText: "Select Automated Assessment"
    }
  ];

  return (
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {cards.map((card, index) => (
        <AssessmentCard key={index} {...card} />
      ))}
    </div>
  );
};

export default function Assessment() {
  const steps = ['Select Method', 'Assessment', 'Results']
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <CustomStepper currentStep={0} steps ={steps} />
        <InfoBanner className='mx-6'/>
        <AssessmentCards />
      </div>
    </div>
  );
}