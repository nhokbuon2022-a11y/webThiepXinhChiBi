import { Link } from "react-router-dom";
import products from "../Data/products";

function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const favoriteProducts = products.filter((item) =>
    wishlist.includes(item.id)
  );

  return (
    <section className="wishlist">
      <div className="container">
        <h2>❤️ Sản phẩm yêu thích</h2>

        {favoriteProducts.length === 0 ? (
          <p>Bạn chưa có sản phẩm yêu thích.</p>
        ) : (
          <div className="product-grid">
            {favoriteProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="image">
                  <img src={item.images[0]} alt={item.name} />
                </div>

                <div className="content">
                  <h3>{item.name}</h3>

                  <p>{item.price}</p>

                  <Link
                    className="detail-btn"
                    to={`/product/${item.id}`}
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Wishlist;