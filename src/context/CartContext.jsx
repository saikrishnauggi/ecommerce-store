import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
