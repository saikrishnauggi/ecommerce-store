import { useContext } from "react";
import CartContext from "../context/cart-context";

function CartItem({ item }) {
  const { addToCart, decreaseQuantity } = useContext(CartContext);

  return (
    <div style={itemStyle}>
      <div>
        <h4>{item.title}</h4>
        <p>₹ {item.price}</p>
      </div>

      <div style={quantityContainer}>
        <button onClick={() => decreaseQuantity(item.id)} style={btnStyle}>
          −
        </button>

        <span style={{ margin: "0 10px", fontWeight: "bold" }}>
          {item.quantity}
        </span>

        <button onClick={() => addToCart(item)} style={btnStyle}>
          +
        </button>
      </div>

      <p>
        Subtotal: ₹ {(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ddd",
  padding: "15px 0",
};

const quantityContainer = {
  display: "flex",
  alignItems: "center",
};

const btnStyle = {
  padding: "5px 10px",
  border: "none",
  background: "#007bff",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

export default CartItem;
