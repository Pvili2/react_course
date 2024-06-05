import { useRef } from "react";
import { useState } from "react"
import { ResultModal } from "./ResultModal";

export function TimerChallenges({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10)
        setTimerStarted(true);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        setTimeRemaining(targetTime * 1000)
        dialog.current.open();
    }
    return (

        <>
            <ResultModal ref={dialog} remainingTime={timeRemaining} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop challenge" : "Start challenge"}
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Timer is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}