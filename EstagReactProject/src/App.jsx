import { useState } from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Header from "./components/Header"
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <ProductList />
        <Cart cartItems={[]} onRemoveFromCart={() => {}} />
      </div>
    </>
  );
}

export default App;
