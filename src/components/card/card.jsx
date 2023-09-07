import '../card/card.css'

const Card = ({ title, img, alt }) => {
  return (
    <article className="card">
      <a className="card__linkimg" href="/">
        <img className="card__img" src={img} alt={alt} />
      </a>
      <a className="card__link" href="/">
        <h3 className="card__subtitle">{title}</h3>
        <span className="card__descr">Explore Now!</span>
      </a>
    </article>
  )
}

export default Card
