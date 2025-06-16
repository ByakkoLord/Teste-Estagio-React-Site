import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function ProductList() {
    const [productList, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data)
      console.log("Products fetched:", response.data)
    }).catch((error) => {
      console.error("Error fetching products:", error)
      setProducts([])
    });
  }, []);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}ss</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
