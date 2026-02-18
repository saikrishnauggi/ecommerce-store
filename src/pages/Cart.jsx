import { useContext } from "react";
import CartContext from "../context/cart-context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={emptyStyle}>
          <h2>Your cart is empty 🛒</h2>
          <p>Add some products to see them here.</p>
        </div>
      ) : (
        <div style={containerStyle}>
          {/* Left Side - Items */}
          <div style={itemsSection}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right Side - Summary */}
          <div style={summarySection}>
            <h3>Order Summary</h3>

            <div style={summaryRow}>
              <span>Items ({totalItems})</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>

            <div style={summaryRow}>
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr style={{ margin: "15px 0" }} />

            <div style={totalRow}>
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>

            <button style={checkoutBtn}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------- Styles ----------- */

const pageStyle = {
  padding: "50px",
  background: "#f4f6f9",
  minHeight: "100vh",
};

const headingStyle = {
  marginBottom: "30px",
};

const containerStyle = {
  display: "flex",
  gap: "40px",
};

const itemsSection = {
  flex: 2,
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const summarySection = {
  flex: 1,
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  height: "fit-content",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const totalRow = {
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
  fontSize: "18px",
};

const checkoutBtn = {
  marginTop: "20px",
  width: "100%",
  padding: "12px",
  background: "#28a745",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const emptyStyle = {
  textAlign: "center",
  marginTop: "100px",
};

export default Cart;
