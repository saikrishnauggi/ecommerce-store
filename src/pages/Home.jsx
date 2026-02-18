import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setFeaturedProducts(res.data.slice(0, 4)); // show first 4 products
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1>Welcome to My Store</h1>
        <p>Discover amazing products at unbeatable prices</p>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Featured Products
        </h2>

        <div style={gridStyle}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

const heroStyle = {
  background: "linear-gradient(to right, #1e3c72, #2a5298)",
  color: "white",
  padding: "60px 20px",
  textAlign: "center",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

export default Home;
