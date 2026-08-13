import "./Hero.css";
import heroImage from "../../assets/images/hero/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${heroImage})`,
      }}
    >
      <div className="hero-overlay">
        <p className="hero-subtitle">THÀNH ĐÔ CARDS</p>

        <h1>Thiệp đẹp cho mọi khoảnh khắc</h1>

        <p className="hero-desc">
          Thiệp cưới • Thiệp sinh nhật • Thiệp Tết • Thiệp khai trương
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Khám phá ngay</button>
          <button className="btn-outline">Liên hệ</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;