import { createContext, useState } from "react"

// Criação do contexto
export const CartContext = createContext()

// Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  console.log("CartProvider initialized with cartItems:", cartItems)

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  )
}
