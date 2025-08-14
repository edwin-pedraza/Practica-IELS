import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore.js';

/**
 * Test page displaying the prompt, editor and timer.
 * @returns {JSX.Element}
 */
export default function Test() {
  const {
    promptText,
    response,
    setResponse,
    startedAt,
    durationMins,
    isRunning,
    stop,
    reset,
  } = useTestStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!promptText) navigate('/');
  }, [promptText, navigate]);

  const [remaining, setRemaining] = useState(durationMins * 60);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now() - (startedAt ?? 0)) / 1000);
      setRemaining(Math.max(0, durationMins * 60 - elapsed));
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, durationMins, startedAt]);

  const words = response.trim() ? response.trim().split(/\s+/).length : 0;

  return (
    <div>
      <p>{promptText}</p>
      <textarea
        rows={10}
        cols={50}
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <div>
        <span>
          Time left: {Math.floor(remaining / 60)}:
          {(remaining % 60).toString().padStart(2, '0')}
        </span>
        <span> Words: {words}</span>
      </div>
      <button
        onClick={() => {
          reset();
          setRemaining(durationMins * 60);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          stop();
          navigate('/');
        }}
      >
        Finish
      </button>
    </div>
  );
}
