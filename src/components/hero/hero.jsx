import './hero.css'
import heroImg from '../../img/images/hero-img.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">LET’S EXPLORE UNIQUE CLOTHES.</h1>
            <p className="hero__descr">
              Live for Influential and Innovative fashion!
            </p>
            <a className="hero__link" href="/">
              Shop Now
            </a>
          </div>
          <img className="hero__img" src={heroImg} alt="Girl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
