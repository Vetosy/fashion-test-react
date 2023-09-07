import './brands.css'
import hm from '../../img/brands/hm.jpg'
import obey from '../../img/brands/obey.jpg'
import shopify from '../../img/brands/shopify.jpg'
import lacoste from '../../img/brands/lacoste.jpg'
import levis from '../../img/brands/levis.jpg'
import amazon from '../../img/brands/amazon.jpg'

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list list-reset">
          <li className="brands__item">
            <img className="brands__img" src={hm} alt="" />
          </li>
          <li className="brands__item">
            <img className="brands__img" src={obey} alt="" />
          </li>
          <li className="brands__item">
            <img className="brands__img" src={shopify} alt="" />
          </li>
          <li className="brands__item">
            <img className="brands__img" src={lacoste} alt="" />
          </li>
          <li className="brands__item">
            <img className="brands__img" src={levis} alt="" />
          </li>
          <li className="brands__item">
            <img className="brands__img" src={amazon} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Brands
