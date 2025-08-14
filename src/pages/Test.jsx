import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTestStore } from '../store/useTestStore.js';
import Timer from '../components/Timer.jsx';

/**
 * Test page displaying the prompt, editor and timer.
 * @returns {JSX.Element}
 */
export default function Test() {
  const { promptText, response, setResponse, stop } = useTestStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!promptText) navigate('/');
  }, [promptText, navigate]);
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
          Time left: <Timer />
        </span>
        <span> Words: {words}</span>
      </div>
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

