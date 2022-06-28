import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import IcecreamCounter from "./features/icecream/IcecreamCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <IcecreamCounter />
    </div>
  );
}

export default App;
