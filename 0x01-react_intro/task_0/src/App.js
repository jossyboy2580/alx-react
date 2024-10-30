import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="Holberton School logo"/>
      <h1>School dashboard</h1>
    </div>
    <div className="App-body">
      <p>Login to access the full board</p>
    </div>
    <div className="App-footer">
      <p>
        Copyright 2020 - holberton School
      </p>
    </div>
    </div>
  );
}

export default App;
