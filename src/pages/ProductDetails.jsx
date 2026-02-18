import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProductById } from "../services/api";
import CartContext from "../context/cart-context";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={loadingStyle}>
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Image Section */}
        <div style={imageSection}>
          <img
            src={product.image}
            alt={product.title}
            style={imageStyle}
          />
        </div>

        {/* Info Section */}
        <div style={infoSection}>
          <p style={categoryStyle}>{product.category}</p>

          <h1 style={titleStyle}>{product.title}</h1>

          <div style={ratingRow}>
            <span style={ratingStyle}>
              ⭐ {product.rating?.rate || 4}
            </span>
            <span style={{ color: "#777" }}>
              ({product.rating?.count || 120} reviews)
            </span>
          </div>

          <h2 style={priceStyle}>₹ {product.price}</h2>

          <p style={descriptionStyle}>{product.description}</p>

          <button
            style={buttonStyle}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const pageStyle = {
  background: "#f4f6f9",
  minHeight: "100vh",
  padding: "60px 40px",
};

const containerStyle = {
  display: "flex",
  gap: "60px",
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const imageSection = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxHeight: "350px",
  objectFit: "contain",
};

const infoSection = {
  flex: 1,
};

const categoryStyle = {
  color: "#888",
  textTransform: "uppercase",
  fontSize: "13px",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "15px",
};

const ratingRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
};

const ratingStyle = {
  color: "#f39c12",
  fontWeight: "bold",
};

const priceStyle = {
  fontSize: "26px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const descriptionStyle = {
  lineHeight: "1.7",
  marginBottom: "25px",
};

const buttonStyle = {
  padding: "12px 25px",
  background: "#28a745",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
};

export default ProductDetails;
