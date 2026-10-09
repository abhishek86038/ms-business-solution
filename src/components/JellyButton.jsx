import React, { useState } from "react";

const jellyStyles = `
.ms-jelly-btn {
  position: relative;
  width: 100%;
  height: 62px;
  border: none;
  border-radius: 999px;
  padding: 0 32px;
  background: linear-gradient(180deg, #0b4cae 0%, #073b91 100%);
  color: #ffffff;
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  overflow: visible;
  box-shadow:
    0 10px 25px rgba(7, 59, 145, 0.22),
    inset 0 1px 0 rgba(255,255,255,0.25);
  transition:
    width 0.45s cubic-bezier(.22,1,.36,1),
    height 0.45s cubic-bezier(.22,1,.36,1),
    border-radius 0.45s cubic-bezier(.22,1,.36,1),
    padding 0.45s cubic-bezier(.22,1,.36,1),
    transform 0.2s ease,
    box-shadow 0.25s ease;
}

.ms-jelly-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 14px 32px rgba(7, 59, 145, 0.30),
    inset 0 1px 0 rgba(255,255,255,0.30);
}

.ms-jelly-btn:active:not(:disabled) {
  transform: scale(0.97);
}

.ms-jelly-btn:disabled {
  cursor: default;
}

.ms-jelly-text {
  position: relative;
  z-index: 5;
  white-space: nowrap;
  transition:
    opacity 0.18s ease,
    transform 0.25s ease;
}

.ms-jelly-btn.loading,
.ms-jelly-btn.success {
  width: 62px;
  height: 62px;
  padding: 0;
  border-radius: 50%;
}

.ms-jelly-btn.loading .ms-jelly-text,
.ms-jelly-btn.success .ms-jelly-text {
  opacity: 0;
  transform: scale(0.5);
}


/* WOBBLE */

.ms-jelly-btn.wobble {
  animation: msJellyWobble 0.55s ease;
}

@keyframes msJellyWobble {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(-5deg);
  }

  40% {
    transform: rotate(4deg);
  }

  60% {
    transform: rotate(-3deg);
  }

  80% {
    transform: rotate(2deg);
  }

  100% {
    transform: rotate(0deg);
  }
}


/* LOADING SPINNER */

.ms-jelly-spinner {
  position: absolute;
  z-index: 10;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.30);
  border-top-color: #ffffff;
  opacity: 0;
  transform: scale(0.5);
}

.ms-jelly-btn.loading .ms-jelly-spinner {
  opacity: 1;
  transform: scale(1);
  animation: msJellySpin 0.7s linear infinite;
}

@keyframes msJellySpin {
  to {
    transform: rotate(360deg);
  }
}


/* SUCCESS CHECK */

.ms-jelly-check {
  position: absolute;
  z-index: 10;
  width: 29px;
  height: 29px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 17px;
  font-weight: 700;
  opacity: 0;
  transform: scale(0.3) rotate(-35deg);
}

.ms-jelly-btn.success .ms-jelly-check {
  opacity: 1;
  animation: msJellyCheck 0.45s cubic-bezier(.17,.89,.32,1.3) forwards;
}

@keyframes msJellyCheck {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-35deg);
  }

  70% {
    opacity: 1;
    transform: scale(1.15) rotate(5deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
}


/* SUCCESS POP */

.ms-jelly-btn.success {
  animation: msJellySuccess 0.5s cubic-bezier(.17,.89,.32,1.3);
}

@keyframes msJellySuccess {
  0% {
    transform: scale(0.75);
  }

  60% {
    transform: scale(1.12);
  }

  100% {
    transform: scale(1);
  }
}


/* BURST DOTS */

.ms-jelly-burst {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.ms-jelly-burst span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #073b91;
  opacity: 0;
}

.ms-jelly-btn.success .ms-jelly-burst span {
  animation: msJellyBurst 0.7s ease-out forwards;
}

.ms-jelly-burst span:nth-child(1) {
  --x: -55px;
  --y: -35px;
}

.ms-jelly-burst span:nth-child(2) {
  --x: 55px;
  --y: -35px;
}

.ms-jelly-burst span:nth-child(3) {
  --x: 68px;
  --y: 5px;
}

.ms-jelly-burst span:nth-child(4) {
  --x: -68px;
  --y: 5px;
}

.ms-jelly-burst span:nth-child(5) {
  --x: -40px;
  --y: 48px;
}

.ms-jelly-burst span:nth-child(6) {
  --x: 40px;
  --y: 48px;
}

@keyframes msJellyBurst {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    opacity: 0;
    transform:
      translate(
        calc(-50% + var(--x)),
        calc(-50% + var(--y))
      )
      scale(0.2);
  }
}


/* MOBILE */

@media (max-width: 600px) {
  .ms-jelly-btn {
    width: 100%;
  }
}


/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .ms-jelly-btn,
  .ms-jelly-btn *,
  .ms-jelly-btn::before,
  .ms-jelly-btn::after {
    animation: none !important;
    transition: none !important;
  }
}
`;


export default function JellyButton({
  onSubmit,
  children = "Submit Consultation Request"
}) {

  const [state, setState] = useState("idle");

  const handleSubmit = async (event) => {

    if (state !== "idle") return;

    event.preventDefault();

    setState("wobble");

    await new Promise(resolve => setTimeout(resolve, 550));

    setState("loading");

    try {

      /*
       IMPORTANT:
       onSubmit MUST be the REAL FORM SUBMISSION.
       It must return a Promise.
      */

      if (onSubmit) {
        await onSubmit(event);
      }

      setState("success");

      setTimeout(() => {
        setState("idle");
      }, 2200);

    } catch (error) {

      console.error("Consultation submission failed:", error);

      setState("idle");

    }
  };


  return (
    <>
      <style>{jellyStyles}</style>

      <button
        type="submit"
        className={`ms-jelly-btn ${state}`}
        onClick={handleSubmit}
        disabled={state === "loading"}
      >

        <span className="ms-jelly-text">
          {children}
        </span>

        <span
          className="ms-jelly-spinner"
          aria-hidden="true"
        />

        <span
          className="ms-jelly-check"
          aria-hidden="true"
        >
          ✓
        </span>

        <span
          className="ms-jelly-burst"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>

      </button>
    </>
  );
}
