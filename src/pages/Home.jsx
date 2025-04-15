import { Link } from "react-router"
import MainPictureDesktop from "../assets/christin-hume-unsplash.webp" 
import MainPictureMobile from "../assets/christin-hume-unsplash-480.webp"
import SocialMedia from "../components/SocialMedia/SocialMedia" 
import Card from "../components/Cards/Card"
import Skills from "../components/Utils/Skills"
import Button from "../components/Utils/Button"
import data from '../data/realisations.json'

function Home(){

  return(
    <div>
      <div className="homepage">
        <div className="mainContent">
          <SocialMedia />
          <div className="mainContent__text">
            <h1 className="mainContent__h1">Développeuse web front-end</h1>
            <p className="mainContent__paragraph">Avec 10 ans d'expérience professionnelle dans la communication, je suis en reconversion professionnelle. Mon objectif ? Exploiter les dernières technologies du web pour faire "parler" les données issues de l'Open Data. <strong>Et si on travaillait ensemble ?</strong></p>
          </div>
          <div className="mainContent__image">
            <div className="mainContent__cover"></div>
              <img className="image" 
                src={MainPictureDesktop} alt="Image représentant une femme qui tape sur son clavier d'ordinateur" 
                srcSet={`${MainPictureMobile} 360w, ${MainPictureDesktop} 800w`}
                sizes="(max-width: 1024px) 360px, 800px"
              />
            </div>
        </div>

      </div>
      <div className="realisations">
          <h2 className="realisations__title">Réalisations à la une</h2>
          <div className="realisations__cardsFlex">

            <ul className="realisations__ul">
              {data.map((realisation) => {
                return(
                  <li key={realisation.id}>
                    <Link className="realisations__cardsLink" to={`/realisations/${realisation.id}`}>
                      <Card 
                        title={realisation.nomProjet} 
                        date={realisation.dateLivraison}
                        img={realisation.coverHome}
                        arrayTags={realisation.technologie}
                        description={realisation.mission_court}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

          </div>
      </div>
      <div className="competences">
          <Skills />
      </div>
      <div className="enSavoirPlus">
      <Button 
        link="/a-propos"
        name="Consultez mon parcours"
      />
      </div>
    </div>
  )
}

export default Home