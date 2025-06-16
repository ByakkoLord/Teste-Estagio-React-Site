import { useEffect, useState, useContext } from "react"
import { api } from "../services/api"
import { CartContext } from "../contexts/CartContext"

export default function ProductList() {
    const [productList, setProducts] = useState([])
    const { setCartItems } = useContext(CartContext)

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data)
      console.log("Products fetched:", response.data)
    }).catch((error) => {
      console.error("Error fetching products:", error)
      setProducts([])
    })
  }, [])

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id)

            if (existingItem) {
              return prevItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              );
            }

            return [...prevItems, { ...product, quantity: 1 }]
          })}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
