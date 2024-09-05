import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

//import StatefulGreeting from './components/StatfulGreeting';
//import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';  

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
