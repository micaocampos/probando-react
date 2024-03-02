
import './App.css';
import { Component } from 'react';

//const App = () => {
class App extends Component {
  render() {
    return (
      <div class="contenedor">
        <h1>HELLO DOJO!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    );
  }
}

export default App;