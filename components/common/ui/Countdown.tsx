"use client";
import { useCallback, useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown({
  parentClass = "countdown",
  style = 1,
  targetDate = "2026-11-31T23:59:59",
}) {
  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Time is up
  }, [targetDate]);

  // "initial" = not yet mounted on client, so render null to avoid hydration issues
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | "initial">(
    "initial",
  );

  useEffect(() => {
    // Start ticking once per second on the client
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [calculateTimeLeft]);

  if (timeLeft === "initial") {
    return null;
  }

  if (!timeLeft) {
    return <div>Time&apos;s up!</div>;
  }

  return (
    <>
      {style == 1 ? (
        <div className={parentClass}>
          <div className="countdown-container days">
            <span className="countdown-value"> {timeLeft.days}</span>
            <span className="countdown-heading">Days</span>
          </div>
          <div className="countdown-container hours">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-heading">Hours</span>
          </div>
          <div className="countdown-container minutes">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-heading">Mins</span>
          </div>
          <div className="countdown-container seconds">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-heading">Secs</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {style == 2 ? (
        <div className={parentClass}>
          <div className="countdown-container days">
            <span className="countdown-value days-bottom">{timeLeft.days}</span>
            <span className="countdown-heading days-top">Days</span>
          </div>
          <div className="countdown-container hours">
            <span className="countdown-value hours-bottom">
              {timeLeft.hours}
            </span>
            <span className="countdown-heading hours-top">Hrs</span>
          </div>
          <div className="countdown-container minutes">
            <span className="countdown-value minutes-bottom">
              {timeLeft.minutes}
            </span>
            <span className="countdown-heading minutes-top">Mins</span>
          </div>
          <div className="countdown-container seconds">
            <span className="countdown-value seconds-bottom">
              {timeLeft.seconds}
            </span>
            <span className="countdown-heading seconds-top">Secs</span>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
}
