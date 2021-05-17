import React, { useEffect, useState, useRef } from "react";

export default function DelayedRender({ children = 0, delay = 100 }) {
  const [step, setStep] = useState(0);
  const flexRef = useRef(document.createElement("div"));

  const flexStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    minWidth: "10rem",
    minHeight: "10rem",
    margin: "0.5rem",
    animationName: "fade-in",
    animationDelay: `${delay}ms`,
    opacity: step > 0 ? 1 : 0,
    overflow: "hidden",
    transition: `opacity ${delay}ms ease`,
  };

  const placeholderStyles = {
    position: "absolute",
    width: flexRef.current.clientWidth,
    height: flexRef.current.clientHeight,
    backgroundColor: "#999999",
    borderRadius: "8px",
    opacity: step > 1 ? 1 : 0,
    transition: `opacity ${delay}ms ease`,
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
