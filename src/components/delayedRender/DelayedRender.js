import React, { useEffect, useState, useRef } from "react";

export default function DelayedRender({
  children = 0,
  customStyles = {},
  placeholderCustomStyles = {},
  transition = 25,
  index = 1,
  customClass = "",
}) {
  const [step, setStep] = useState(0);
  const flexRef = useRef(document.createElement("div"));

  const flexStyles = {
    opacity: step > 0 ? 1 : 0,
    transition: `opacity ${transition}ms ease`,
    ...customStyles,
  };

  const placeholderStyles = {
    pointerEvents: "none",
    position: "absolute",
    width: flexRef.current.clientWidth,
    height: flexRef.current.clientHeight,
    opacity: step > 1 ? 1 : 0,
    transition: `opacity ${transition}ms ease`,
    ...placeholderCustomStyles,
  };

  useEffect(() => {
    const stepper = setInterval(() => {
      if (step < 3) setStep(step + 1);
    }, transition * index);

    return () => {
      clearInterval(stepper);
    };
  }, [step, index, transition]);

  return (
    <div
      className={`delayed-render ${customClass}`}
      ref={flexRef}
      style={flexStyles}
    >
      {step > 2 && children}
      {step < 3 && (
        <div className={`placeholder`} style={placeholderStyles}></div>
      )}
    </div>
  );
}
