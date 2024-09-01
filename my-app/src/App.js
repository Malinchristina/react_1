import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';  

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32g"/>
    </div>
  );
}

export default App;
