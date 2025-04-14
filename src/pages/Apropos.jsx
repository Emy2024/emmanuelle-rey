import Accordion from "../components/Utils/Accordion"
import Picture from "../assets/emile_perron_unsplash.webp"
import dataFormation from "../data/formation.json"
import dataCV from "../data/cv_experience.json"
import CardExperiencePro from "../components/Cards/CardExperiencePro"
import Button from "../components/Utils/Button"
import Softskills from "../components/Utils/Softskills"
import cvPdf from '../assets/emmanuelle_rey_cv.pdf'

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

            <div className="aPropos__telechargement">
                <Button
                    name="Télécharger le CV complet"
                    link="https://emy2024.github.io/emmanuelle-rey/assets/emmanuelle_rey_cv-DCyX8srO.pdf" 
                />
            </div>


    </div>
    )
}

export default Apropos