import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [notes, setNotes] = useState<
    { id: number; title: string; content: string; modDate: number }[]
  >([]);
  const onAddNote = () => {
    const newNote = {
      id: Date.now(),
      title: '新しいノート',
      content: 'ノートの内容です。',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
