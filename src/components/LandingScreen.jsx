import { useState } from 'react';

export default function LandingScreen({ tasks, onStart }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="landing">
      <h1>Select a Task</h1>
      {Object.values(tasks).map((task) => (
        <div key={task.id} className="task-option">
          <label>
            <input
              type="radio"
              name="task"
              value={task.id}
              onChange={() => setSelected(task.id)}
            />
            {task.name}
          </label>
          {selected === task.id && <p>{task.instruction}</p>}
        </div>
      ))}
      <button disabled={!selected} onClick={() => onStart(tasks[selected])}>
        Start Test
      </button>
    </div>
  );
}
