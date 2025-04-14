import { Link } from "react-router-dom"

function Error(){
  return(
    <div className="error">
      <div className="error__introduction">
        <h1 className="error__title">Oops !</h1>
        <div className="error__content">
          <p>Erreur 404 ! La page que vous demandez n'existe pas ou plus. Voici les liens qui pourraient vous intéresser :</p>
          <ul>
            <li><Link className="error__link" to={"/emmanuelle-rey"}>Accueil</Link></li>
            <li><Link className="error__link" to={"/a-propos"}>A propos</Link></li>
            <li><Link className="error__link" to={"/contact"}>Contact</Link></li>
            <li><Link className="error__link" to={"/mentions-legales"}>Mentions légales</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Error