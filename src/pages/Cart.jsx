import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
} from "../utils/cart";
import "./Cart.css";
import { Link } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleIncrease = (item) => {
    setCart(updateQuantity(item.id, item.quantity + 1));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) return;

    setCart(updateQuantity(item.id, item.quantity - 1));
  };

  const handleRemove = (id) => {
    setCart(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/\D/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      <div className="container">
        <h2>🛒 Giỏ hàng</h2>

        {cart.length === 0 ? (
          <h3>Giỏ hàng đang trống.</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>{item.price}</p>
                </div>

                <div className="quantity">
                  <button
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete"
                  onClick={() =>
                    handleRemove(item.id)
                  }
                >
                  Xóa
                </button>
              </div>
            ))}

            <div className="cart-total">
              <h2>
                Tổng:
                {total.toLocaleString()} đ
              </h2>

                <Link className="cart-checkout-link" to="/checkout">
                  Thanh toán
                </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;