
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');

  const handleClick = async () => {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
    const data = response.data;
    setUrl(data);
  }
  const handleInput = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Enter big URL" value={url} onChange={handleInput} />
        <button onClick={handleClick} >Shorten</button>
      </div>
    </div>
  );
}

export default App;
