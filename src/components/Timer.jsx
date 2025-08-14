import { useEffect, useState } from 'react';
import { useTestStore } from '../store/useTestStore.js';

export default function Timer() {
  const { startedAt, durationMins, isRunning, stop } = useTestStore();
  const [remaining, setRemaining] = useState(durationMins * 60);

  useEffect(() => {
    const update = () => {
      const elapsed = Math.floor((Date.now() - (startedAt ?? 0)) / 1000);
      const seconds = Math.max(0, durationMins * 60 - elapsed);
      setRemaining(seconds);
      if (seconds <= 0 && isRunning) {
        stop();
      }
    };

    update();
    if (!isRunning) return;
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [isRunning, durationMins, startedAt, stop]);

  const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');

  return (
    <span>
      {minutes}:{seconds} {remaining <= 0 && '(Time up)'}
    </span>
  );
}
