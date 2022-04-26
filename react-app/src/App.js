import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [text, setText] = useState('')
  useEffect(()=> {
    // Fetch data or any side-effect action
    fetch("https://cat-fact.herokuapp.com/facts/")
    .then((response)=> response.json())
    .then((data) => {
      setText(data[0].text)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
