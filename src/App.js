import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import IcecreamCounter from "./features/icecream/IcecreamCounter";
import Products from "./features/products/Products";

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
