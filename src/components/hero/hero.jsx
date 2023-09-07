import './hero.css'
import heroImg from '../../img/images/hero-img.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__highlight">LET’S</span> EXPLORE
              <span className="hero__highlight hero__highlight--unique">
                UNIQUE
              </span>
              CLOTHES.
            </h1>
            <p className="hero__descr">
              Live for Influential and Innovative fashion!
            </p>
            <div className="hero__link-wrapper">
              <a className="hero__link" href="/">
                Shop Now
              </a>
            </div>
          </div>
          <img className="hero__img" src={heroImg} alt="Girl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
