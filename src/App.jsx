import { useState } from 'react';
import LandingScreen from './components/LandingScreen.jsx';
import TestScreen from './components/TestScreen.jsx';
import { tasks } from './data/tasks.js';
import './styles/App.css';

function App() {
  const [currentTask, setCurrentTask] = useState(null);

  if (!currentTask) {
    return <LandingScreen tasks={tasks} onStart={setCurrentTask} />;
  }

  return <TestScreen task={currentTask} />;
}

export default App;
