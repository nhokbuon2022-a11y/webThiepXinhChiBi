import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import products from "../Data/products";
import { useEffect, useState } from "react";
import { addToCart } from "../utils/cart";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  useEffect(() => {
    setMainImage(product?.images?.[0] || "");
  }, [product?.id]);

  if (!product) {
    return <h2>Sản phẩm không tồn tại.</h2>;
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);

  const visibleThumbnails = product.images.slice(0, 4);
  const remainingCount = product.images.length - visibleThumbnails.length;

  return (
    <section className="detail">

      <div className="detail-container">

        {/* Ảnh */}

        <div className="detail-image">
          <img className="main-image" src={mainImage} alt={product.name} />

          <div className="thumbs">
            {visibleThumbnails.map((img, index) => (
              <img
                key={index}
                className="thumb-image"
                src={img}
                alt=""
                onClick={() => setMainImage(img)}
              />
            ))}

            {remainingCount > 0 && (
              <div className="thumb-more">+{remainingCount}</div>
            )}
          </div>
        </div>

        {/* Nội dung */}

        <div className="detail-content">

          <span className="product-category-pill">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span>(128 đánh giá)</span>
          </div>

          <h2>{product.price}</h2>

          <p>
            {product.description}
          </p>

          <ul>

            <li>✔ Giấy mỹ thuật cao cấp</li>

            <li>✔ In sắc nét hai mặt</li>

            <li>✔ Có thể cá nhân hóa nội dung</li>

            <li>✔ Thiết kế độc quyền</li>

          </ul>

          <div className="btn-group">

          <button
              className="buy"
              onClick={() => {
                addToCart(product);
                alert("Đã thêm vào giỏ hàng!");
              }}
            >
              <FaShoppingCart /> Đặt ngay
          </button>

            <button className="love">
              <FaHeart />
            </button>

          </div>

        </div>

      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Sản phẩm liên quan</h3>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <div className="related-card" key={item.id}>
                <img src={item.images?.[0]} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

export default ProductDetail;