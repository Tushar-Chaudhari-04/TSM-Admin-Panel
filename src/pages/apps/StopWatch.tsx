import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const StopWatch = () => {
  const formatTime = (timeSecond: number) => {
    // code here
    const hours = Math.floor(timeSecond / 3600);
    const minutes = Math.floor((timeSecond % 3600) / 60);
    const seconds = timeSecond % 60;

    const hoursInString = hours.toString().padStart(2, "0");
    const minutesInString = minutes.toString().padStart(2, "0");
    const secondsInString = seconds.toString().padStart(2, "0");

    return `${hoursInString}::${minutesInString}::${secondsInString}`;
  };

  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;
    intervalId = setInterval(() => {
      if (isRunning) {
        setTime((prev) => prev + 1);
        console.log("time", time);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard-app-container">
        <h1>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StopWatch;
