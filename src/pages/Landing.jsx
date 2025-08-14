import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tasks } from '../data/prompts.js';
import { useTestStore } from '../store/useTestStore.js';

/**
 * Landing page to choose a task and prompt.
 * @returns {JSX.Element}
 */
export default function Landing() {
  const [taskKey, setTaskKey] = useState('');
  const [promptId, setPromptId] = useState('');
  const navigate = useNavigate();
  const start = useTestStore((s) => s.start);

  const task = tasks[taskKey];
  const prompt = task?.prompts.find((p) => p.id === promptId);

  const handleStart = () => {
    if (task && prompt) {
      start(task.key, prompt, task.durationMins);
      navigate('/test');
    }
  };

  return (
    <div>
      <h1>Select a Task</h1>
      {Object.values(tasks).map((t) => (
        <div key={t.key}>
          <label>
            <input
              type="radio"
              name="task"
              value={t.key}
              onChange={() => {
                setTaskKey(t.key);
                setPromptId('');
              }}
            />
            {t.name}
          </label>
          {taskKey === t.key && (
            <div style={{ marginLeft: '1rem' }}>
              {t.prompts.map((p) => (
                <label key={p.id} style={{ display: 'block' }}>
                  <input
                    type="radio"
                    name="prompt"
                    value={p.id}
                    onChange={() => setPromptId(p.id)}
                  />
                  {p.text}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button disabled={!prompt} onClick={handleStart}>
        Start
      </button>
    </div>
  );
}

