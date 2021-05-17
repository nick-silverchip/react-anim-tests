import React, { useEffect, useState } from "react";

export default function DelayedRender({ children, placeholder, delay = 0 }) {
  const [loading, setIsLoading] = useState(delay > 0 ? true : false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const stepper = setInterval(() => {
      if (step < 3) setStep(step + 1);
    }, delay);
    return () => {
      clearInterval(stepper);
    };
  }, [step, delay]);

  if (step === 0) return <div>0</div>;
  else if (step === 1) return <div>1</div>;
  else if (step === 2) return <div>2</div>;
  return <>{step}</>;
}
