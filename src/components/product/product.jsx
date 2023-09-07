import Card from '../card/card'
import cardImgOne from '../../img/product/product-1.jpg'
import cardImgTwo from '../../img/product/product-2.jpg'
import cardImgThree from '../../img/product/product-3.jpg'
import './product.css'

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <h2 className="product__title title">NEW ARRIVALS</h2>
        <ul className="product__list list-reset">
          <li className="product__item">
            <Card
              title="Hoodies & Sweetshirt"
              img={cardImgOne}
              alt="Girl in Hoodies"
            />
          </li>
          <li className="product__item">
            <Card
              title="Coats & Parkas"
              img={cardImgTwo}
              alt="Girl in Coats & Parkas"
            />
          </li>
          <li className="product__item">
            <Card
              title="Tees & T-Shirt"
              img={cardImgThree}
              alt="Tees & T-Shirt"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Product
