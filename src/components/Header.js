import "./header.css";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <div className="flex-d">
        <Link to="/">
        <img src="../images/logo.png"></img>
        </Link>
        <nav style={{display:"flex", justifyContent:"space-between", gap:"1rem" }}>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </nav>
        <Link to="/cart">
        <span>Cart 2</span>
        </Link>
        </div>
    </header>
  )
}
