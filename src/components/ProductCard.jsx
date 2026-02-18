import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/cart-context";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={cardStyle}>
      <div style={imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          style={imageStyle}
        />
      </div>

      <div style={{ padding: "15px" }}>
        <p style={categoryStyle}>{product.category}</p>

        <h3 style={titleStyle}>
          {product.title.slice(0, 50)}...
        </h3>

        <div style={priceRatingRow}>
          <p style={priceStyle}>₹ {product.price}</p>
          <span style={ratingStyle}>
            ⭐ {product.rating?.rate || 4}
          </span>
        </div>

        <div style={buttonRow}>
          <Link to={`/products/${product.id}`}>
            <button style={viewBtn}>View</button>
          </Link>

          <button
            style={addBtn}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ----------- STYLES ----------- */

const cardStyle = {
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  transition: "0.3s ease",
  cursor: "pointer",
};

const imageContainer = {
  background: "#f8f9fa",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "220px",
};

const imageStyle = {
  maxHeight: "160px",
  objectFit: "contain",
};

const categoryStyle = {
  fontSize: "12px",
  color: "#777",
  textTransform: "uppercase",
  marginBottom: "5px",
};

const titleStyle = {
  fontSize: "15px",
  height: "40px",
  overflow: "hidden",
};

const priceRatingRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
};

const priceStyle = {
  fontWeight: "bold",
  fontSize: "16px",
};

const ratingStyle = {
  fontSize: "14px",
  color: "#f39c12",
};

const buttonRow = {
  marginTop: "15px",
  display: "flex",
  justifyContent: "space-between",
};

const viewBtn = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "1px solid #007bff",
  background: "white",
  color: "#007bff",
  cursor: "pointer",
};

const addBtn = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  background: "#28a745",
  color: "white",
  cursor: "pointer",
};

export default ProductCard;
