import React, { useState } from 'react';
import "./Stepper.css"


export default function Stepper({ numberOfSteps }) {
  const [currentStep, setCurrentStep] = useState(-1);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const activeColor = (index) => (currentStep >= index ? 'bg-my-green' : 'bg-my-white');
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex items-center justify-center" style={{padding:'4%'}}>
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`relative flex flex-col items-center justify-center w-6 h-6 rounded-full cursor-pointer ${activeColor(index)}`}
            onClick={() => handleStepClick(index)}
          >
            <span className="steps">{`Step${index + 1}`}</span>
          </div>
          {!isFinalStep(index) && (
            <div className={`w-24 h-1 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
