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
            <p className="mainContent__paragraph">Avec +10 ans d'expérience professionnelle dans la communication en France et à l'étranger, je suis en transition professionnelle vers les métiers du développement web. Mon objectif ? Apporter mon expertise en communication, graphisme et web pour réaliser des sites web impactants et personnalisés.</p> 
            <p className="mainContent__paragraph"><strong>Et si on travaillait ensemble ?</strong></p>
          </div>
          <div className="mainContent__image">
            <div className="mainContent__cover"></div>
              <picture className="image">
                <source 
                  srcSet={MainPictureMobile} 
                  media="(max-width: 480px)" 
                />
                <source 
                  srcSet={MainPictureDesktop} 
                  media="(min-width: 481px)" 
                />
                <img 
                  src={MainPictureDesktop}
                  alt="Image représentant une femme qui tape sur son clavier d'ordinateur"
                  className="image"
                />
              </picture>


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