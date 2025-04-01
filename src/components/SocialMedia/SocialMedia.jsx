import linkedinLogo from "../../assets/linkedin.svg"
import githubLogo from "../../assets/githubSocialIcon.svg"
import cvLogo from "../../assets/cv.svg"
import cvPdf from '../../assets/emmanuelle_rey_cv.pdf'
import { Link } from "react-router-dom"

function SocialMedia(){
    return(
        <div className="socialMedia">
            <Link to={"https://www.linkedin.com/in/emmanuellerey/"}  target="_blank">
                <div className="socialMedia__container" >
                    <img className="socialMedia__containerLogo" src={linkedinLogo} alt="Linkedin"/>
                </div>
            </Link>
     
            <Link to={"https://github.com/Emy2024"} target="_blank">
                <div className="socialMedia__container" >
                    <img className="socialMedia__containerLogo" src={githubLogo} alt="Github"/>
                </div>
            </Link>

                 
            <a href={cvPdf} target="_blank">
                <div className="socialMedia__container" >
                    <img className="socialMedia__containerLogo" src={cvLogo} alt="CV au format PDF"/>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia