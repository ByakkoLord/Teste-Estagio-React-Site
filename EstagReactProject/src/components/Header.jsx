import Cart from "../assets/cart.png";
import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
  const { showCart ,setShowCart } = useContext(CartContext);
    console.log("Header component rendered");
  return (
    <header className="header">
      <h1>React Shop</h1>
      <nav>
        <ul className="nav-links">
          <li style={{ listStyleType: "none" }}>
            <img style={{ cursor: "pointer"}} onClick={() => { if (showCart) { setShowCart(false); } else { setShowCart(true); } }} src={Cart} width={65} alt="Cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
}