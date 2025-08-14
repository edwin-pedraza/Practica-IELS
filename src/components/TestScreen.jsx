import { useState } from 'react';
import Timer from './Timer.jsx';
import useTimerStore from '../store.js';

export default function TestScreen({ task }) {
  const [answer, setAnswer] = useState('');
  const reset = useTimerStore((s) => s.reset);

  return (
    <div className="test-screen">
      <Timer />
      <button onClick={reset}>Reset</button>
      <h2>{task.name}</h2>
      <p>{task.question}</p>
      <textarea
        rows={10}
        cols={50}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}
