import { useState } from 'react';

export default function TestScreen({ task }) {
  const [answer, setAnswer] = useState('');

  return (
    <div className="test-screen">
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
