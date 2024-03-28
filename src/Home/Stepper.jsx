import React, { useState } from 'react';

export default function Stepper({ numberOfSteps }) {
  const [currentStep, setCurrentStep] = useState(-1);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const activeColor = (index) => (currentStep >= index ? 'bg-blue-500' : 'bg-gray-300');
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-6 h-6 rounded-full cursor-pointer ${activeColor(index)}`}
            onClick={() => handleStepClick(index)}
          ></div>
          {!isFinalStep(index) && (
            <div className={`w-12 h-1 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}