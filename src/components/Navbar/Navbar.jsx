import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart,FaShoppingCart  } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          🌸 <span>Thành Đô Cards</span>
        </div>

        <nav className="menu">
          <a href="/">Trang chủ</a>
          <a href="#">Bộ sưu tập</a>
          <a href="#">Danh mục</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Liên hệ</a>

        </nav>

        <div className="nav-actions">
          <button className="contact-btn">
            <FaRegHeart />
            Đặt thiệp
          </button>
          <Link className="wishlist-btn" to="/wishlist">
            <FaHeart />
            <span> Yêu thích</span>
          </Link>
          <Link className="cart-btn" to="/cart">
            <FaShoppingCart />
            <span> Giỏ hàng</span>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;