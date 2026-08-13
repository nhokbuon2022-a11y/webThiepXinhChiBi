import "./ProductCard.css";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import products from "../../Data/products";
import { toggleWishlist } from "../../utils/wishlist";

function ProductCard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  // Reset về trang 1 khi tìm kiếm hoặc lọc
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  // Lọc sản phẩm
  const filteredProducts = products.filter((item) => {
    const matchCategory =
      filter === "all" || item.category === filter;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section className="product">
      <h2>Bộ sưu tập nổi bật</h2>

      {/* Thanh tìm kiếm */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Tìm kiếm thiệp..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Bộ lọc */}
      <div className="filter">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Tất cả
        </button>

        <button
          className={filter === "cuoi" ? "active" : ""}
          onClick={() => setFilter("cuoi")}
        >
          Thiệp cưới
        </button>

        <button
          className={filter === "birthday" ? "active" : ""}
          onClick={() => setFilter("birthday")}
        >
          Sinh nhật
        </button>

        <button
          className={filter === "tet" ? "active" : ""}
          onClick={() => setFilter("tet")}
        >
          Thiệp Tết
        </button>

        <button
          className={filter === "opening" ? "active" : ""}
          onClick={() => setFilter("opening")}
        >
          Khai trương
        </button>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-grid">
        {currentProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="image">
              <img src={item.images[0]} alt={item.name} />

              <button
                onClick={() =>
                  setFavorites(toggleWishlist(item.id))
                }
              >
                <FaHeart
                  color={
                    favorites.includes(item.id)
                      ? "red"
                      : "#ccc"
                  }
                />
              </button>
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ← Trước
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={
                currentPage === index + 1 ? "active" : ""
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Sau →
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductCard;