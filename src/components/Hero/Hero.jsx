import "./Hero.scss";
import penguin from "../../assets/images/penguin.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">
          <span className="hero__title--color">Charity</span> is not about
          <span className="hero__title--color"> pity. </span>It is about{" "}
          <span className="hero__title--color">Love.</span>
        </h1>
        <img src={penguin} className="hero__image"></img>
      </div>
    </div>
  );
}

export default Hero;
