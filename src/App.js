import './App.css';
import Settings from './SettingsPage';
import Timer from './Time';
import { useState } from 'react';

function App() {

  const [showSettings, setShowSettings] = useState(false);

  return (
    <main>
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
