import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";

import InfoCart from "../components/Cart/InfoCart";
import CartAfterTime from "../components/Cart/CartAfterTime";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
        <Cart />
        <InfoCart />
        <CartAfterTime />
      </main>
    </div>
  );
}
export default App;
