import logoImg from './../../img/logo.svg'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo logo" href="/" aria-label="Main logo page">
          <img
            className="header__img"
            src={logoImg}
            alt="Fashion logo"
            loading="lazy"
          />
        </a>
        <div className="header__content">
          <nav className="header__nav">
            <ul className="header__list list-reset">
              <li className="header__item">
                <a className="header__link" href="/">
                  CATALOGUE
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="/">
                  FASHION
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="/">
                  FAVOURITE
                </a>
              </li>
              <li className="header__item">
                <a className="header__link" href="/">
                  LIFESTYLE
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="header__btn btn-reset"
            type="button"
            aria-label="SIGN UP">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
