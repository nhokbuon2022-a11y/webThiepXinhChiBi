import "./Checkout.css";

function Checkout() {
  return (
    <section className="checkout-page">
      <div className="container">
        <h2>Thanh toán</h2>

        <div className="checkout-grid">

          <div className="checkout-form">

            <h3>Thông tin khách hàng</h3>

            <input type="text" placeholder="Họ và tên" />

            <input type="text" placeholder="Số điện thoại" />

            <input type="email" placeholder="Email" />

            <textarea
              rows="5"
              placeholder="Địa chỉ nhận hàng"
            ></textarea>

            <select>
              <option>Thanh toán khi nhận hàng</option>
              <option>Chuyển khoản</option>
              <option>Ví điện tử</option>
            </select>

            <button>Xác nhận đặt hàng</button>

          </div>

          <div className="order-summary">

            <h3>Đơn hàng của bạn</h3>

            <p>Tổng sản phẩm: 3</p>

            <p>Tạm tính: 55.000đ</p>

            <p>Phí vận chuyển: 30.000đ</p>

            <hr />

            <h2>85.000đ</h2>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;