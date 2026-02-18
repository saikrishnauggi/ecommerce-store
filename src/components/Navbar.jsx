import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/cart-context";

function Navbar() {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MyStore</div>

      <div style={linksContainer}>
        <NavLink to="/" current={location.pathname}>Home</NavLink>
        <NavLink to="/products" current={location.pathname}>Products</NavLink>
        <NavLink to="/cart" current={location.pathname}>
          Cart
          <span style={badgeStyle}>{cart.length}</span>
        </NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }) {
  const isActive = current === to;

  return (
    <Link
      to={to}
      style={{
        ...linkStyle,
        color: isActive ? "#4CAF50" : "white",
      }}
    >
      {children}
    </Link>
  );
}

/* -------- Styles -------- */

const navStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "rgba(34, 34, 34, 0.9)",
  backdropFilter: "blur(8px)",
  color: "white",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
};

const logoStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "1px",
};

const linksContainer = {
  display: "flex",
  alignItems: "center",
  gap: "25px",
};

const linkStyle = {
  textDecoration: "none",
  fontSize: "16px",
  position: "relative",
  fontWeight: "500",
};

const badgeStyle = {
  background: "#ff4d4d",
  borderRadius: "50%",
  padding: "3px 8px",
  fontSize: "12px",
  marginLeft: "6px",
};

export default Navbar;
