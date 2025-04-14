import Accordion from "../components/Utils/Accordion"
import Picture from "../assets/emile_perron_unsplash.webp"
import dataFormation from "../data/formation.json"
import dataCV from "../data/cv_experience.json"
import CardExperiencePro from "../components/Cards/CardExperiencePro"
import Softskills from "../components/Utils/Softskills"
import cvLogo from '../assets/cv_grey.svg'
import cvPdf from '../assets/emmanuelle_rey_cv.pdf'
import { Link } from "react-router-dom"

function Apropos(){

    return(
        <div className="aPropos">
            <div className="aPropos__introduction">
                <h1>A propos</h1>
                <p className="aPropos__introductionText">Communicante depuis plus de 10 ans, j'évolue désormais dans le développement web. Découvrez mon parcours !</p>
            </div>
            <div className="aPropos__formation">
             <h2 className="aPropos__formationTitle">Formations</h2>
                <div className="aPropos__pictures">
                    <div className="aPropos__cover"></div>
                    <img className="aPropos__picture" src={Picture} alt="" />
                </div> 
                <div className="aPropos__accordion">
                   {dataFormation.map((item) => (
                        < Accordion
                            key={item.id}
                            duree={item.duree}
                            diplome={item.diplome}
                            ecole={item.ecole}
                            localisation={item.lieu}
                            content={item.description}
                        />
                    ))} 
                </div>
            </div>
            <div className="aPropos__experiencePro">     
              <h2 className="aPropos__experienceProTitle">Expérience professionnelle</h2>
              <div className="aPropos__experienceProContainer">
                {dataCV.map((element) => (
                    < CardExperiencePro 
                        key={element.id}
                        duree={element.duree}
                        src={element.src}
                        web={element.web}
                        entreprise={element.entreprise}
                        poste={element.poste}
                        lieu={element.lieu}
                        typeContrat={element.typeContrat}
                    />
                ))}
              </div>
            </div>

            <div className="softSkills">
                <h2 className="softSkills__Title">Soft skills</h2>
                < Softskills />
            </div>

            <div >
                
                    <div className="aPropos__cvContainer" >
                        <div>
                            <Link className="aPropos__telechargement" to={"https://emy2024.github.io/emmanuelle-rey/assets/emmanuelle_rey_cv-DCyX8srO.pdf"} target="_blank">
                                <img className="aPropos__cv" src={cvLogo} alt="CV"/>
                            </Link>
                        </div>
                        <div>
                            <a href={cvPdf} className="aPropos__cvParagraph" target="_blank">
                                <div>Télécharger le CV complet</div>
                            </a>
                        </div>
                    </div>
                
                
            </div>


    </div>
    )
}

export default Apropos