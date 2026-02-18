import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={loadingStyle}>
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>All Products</h1>

      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const pageStyle = {
  padding: "40px",
  background: "#f4f6f9",
  minHeight: "100vh",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "28px",
  fontWeight: "600",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
};

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60vh",
};

export default Products;
