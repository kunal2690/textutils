import logo from './logo.svg';
import './App.css';
import Navbar from './COMPONENTS/Navbar.js';
import Textform from './COMPONENTS/Textform.js';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white';

    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white'
    }
  }

  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <div className="container">

        <Textform heading='Text Box' />
      </div>


    </>
  );
}

export default App;
