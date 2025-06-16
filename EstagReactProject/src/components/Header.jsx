export default function Header() {
  return (
    <header className="header">
      <h1>React Shop</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}