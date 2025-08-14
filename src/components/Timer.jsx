import { useEffect, useState } from 'react';
import useTimerStore from '../store.js';

export default function Timer() {
  const { startedAt, durationMins, isRunning, setIsRunning } = useTimerStore();
  const [remaining, setRemaining] = useState(durationMins * 60);

  useEffect(() => {
    if (!isRunning) {
      setRemaining(0);
      return;
    }

    const computeRemaining = () => {
      const end = startedAt + durationMins * 60 * 1000;
      const seconds = Math.max(0, Math.floor((end - Date.now()) / 1000));
      setRemaining(seconds);
      if (seconds <= 0) {
        setIsRunning(false);
      }
    };

    computeRemaining();
    const interval = setInterval(computeRemaining, 1000);
    return () => clearInterval(interval);
  }, [isRunning, startedAt, durationMins, setIsRunning]);

  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');

  return (
    <span>
      {minutes}:{seconds} {remaining <= 0 && '(Time up)'}
    </span>
  );
}
