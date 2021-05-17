import React, { useEffect, useState, useRef } from "react";

export default function DelayedRender({
  children = 0,
  delay = 100,
  customStyles = {},
  placeholderCustomStyles = {},
}) {
  const [step, setStep] = useState(0);
  const flexRef = useRef(document.createElement("div"));

  const flexStyles = {
    opacity: step > 0 ? 1 : 0,
    transition: `opacity ${delay}ms ease`,
    ...customStyles,
  };

  const placeholderStyles = {
    pointerEvents: "none",
    position: "absolute",
    width: flexRef.current.clientWidth,
    height: flexRef.current.clientHeight,
    opacity: step > 1 ? 1 : 0,
    transition: `opacity ${delay}ms ease`,
    ...placeholderCustomStyles,
  };

  useEffect(() => {
    const stepper = setInterval(() => {
      if (step < 3) setStep(step + 1);
    }, delay);
    return () => {
      clearInterval(stepper);
    };
  }, [step, delay]);

  return (
    <div ref={flexRef} style={flexStyles}>
      {step > 2 && children}
      {step < 3 && (
        <div className="loading-placeholder" style={placeholderStyles}></div>
      )}
    </div>
  );
}
