import { useState } from 'react';
import useTimerStore from './store.js';
import LandingScreen from './components/LandingScreen.jsx';
import TestScreen from './components/TestScreen.jsx';
import { tasks } from './data/tasks.js';
import './styles/App.css';

function App() {
  const [currentTask, setCurrentTask] = useState(null);
  const startTimer = useTimerStore((s) => s.start);

  if (!currentTask) {
    return (
      <LandingScreen
        tasks={tasks}
        onStart={(task) => {
          startTimer(60);
          setCurrentTask(task);
        }}
      />
    );
  }

  return <TestScreen task={currentTask} />;
}

export default App;
