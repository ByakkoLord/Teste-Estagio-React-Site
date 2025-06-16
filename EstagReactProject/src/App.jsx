import { useState } from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import Header from "./components/Header"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <ProductList />
        <Cart cartItems={[]} onRemoveFromCart={() => {}} />
          <footer><p>Made by Guilherme Fonseca da Costa (11) 9437-9993</p></footer>
      </div>
    </>
  );
}

export default App;
