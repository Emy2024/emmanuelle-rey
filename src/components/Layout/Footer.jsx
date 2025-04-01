import logo from "../../assets/logo_emmanuelle_rey.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Footer() {

  function goToTopPage(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }) 
  }

  const arrowUp = <FontAwesomeIcon icon={faArrowUp} />
  return (
    <>
    <div className="footerLine">
      <div onClick={goToTopPage} className="footerButtonUp">{arrowUp}</div>
    </div>
    
    <div className='footer'>
      <div className='footer__logoContainer'>
          <img className='footer__logo' src={logo} alt="Emmanuelle Rey" />
      </div>
      <div>
          <p className="footer__paragraph"> 2025 | <Link className="footer__link" to="/mentions-legales">Mentions légales</Link></p>
      </div>
    </div>
    </>
  )
}

export default Footer
