import './App.css';
import ReturnsMedian from "./components/Task1"
import  ConvertsToBinary from "./components/Task2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReturnsMedian></ReturnsMedian>
        <hr className="striped-border"></hr>
        <ConvertsToBinary></ConvertsToBinary>
      </header>
    </div>
  );
}

export default App;
