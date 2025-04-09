import { useState, useEffect } from "react";

interface Props {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: Props) => {
  // State to hold the remaining time in seconds
  const [remainingTime, setRemainingTime] = useState(
    (new Date(targetDate).getTime() - new Date().getTime()) / 1000
  );

  useEffect(() => {
    // Update remainingTime when targetDate changes
    setRemainingTime((new Date(targetDate).getTime() - new Date().getTime()) / 1000);
  }, [targetDate]);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [remainingTime]);

  // Function to calculate days, hours, minutes, and seconds
  const getTimeComponents = (timeInSeconds: number) => {
    if (timeInSeconds <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(remainingTime);

  return (
    <div className="flex justify-center items-center gap-6 font-thin">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{days}</span>
        <span className="text-lg text-white">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{String(hours).padStart(2, "0")}</span>
        <span className="text-lg text-white">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{String(minutes).padStart(2, "0")}</span>
        <span className="text-lg text-white">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{String(seconds).padStart(2, "0")}</span>
        <span className="text-lg text-white">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;