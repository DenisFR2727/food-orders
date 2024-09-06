import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
        <Cart />
      </main>
    </div>
  );
}
export default App;
