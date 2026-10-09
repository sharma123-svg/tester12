import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app">
      <div className="card">
        <p className="eyebrow">React starter</p>
        <h1>Hello, React</h1>
        <p>Vite is ready for your next idea.</p>
        <button type="button" onClick={() => alert('It works!')}>
          Test the app
        </button>
      </div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
