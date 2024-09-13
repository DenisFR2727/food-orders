import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";

import "./App.css";
import InfoCart from "../components/Cart/InfoCart";
import CartAfterTime from "../components/Cart/CartAfterTime";

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
