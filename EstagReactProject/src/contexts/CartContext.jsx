import { createContext, useState } from "react"

// Criação do contexto
export const CartContext = createContext()

// Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  console.log("CartProvider initialized with cartItems:", cartItems)

  return (
    <CartContext.Provider value={{ cartItems, setCartItems}}>
      {children}
    </CartContext.Provider>
  )
}
