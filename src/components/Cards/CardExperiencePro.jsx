import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

function CardExperiencePro(props){
  const localisation = <FontAwesomeIcon icon={faLocationDot} style={{color: "#1ca7ac"}} />
  const file = <FontAwesomeIcon icon={faFile} style={{color: "#1ca7ac"}} />

  return(
    <div className="experience">
      <div className="experience__picture">
        <div className="experience__duree">
            {props.duree} 
        </div>
        <img className="experience__pictureSize" src={props.src} alt="" />
      </div>
      <div className="experience__information">
        <span className="experience__poste">
          {props.poste} 
        </span>
        <div className="experience__entreprise">
          <Link className="experience__entrepriseLink" to={props.web}>{props.entreprise}</Link>
        </div>
        <div className="experience__lieu">
          {localisation} {props.lieu}
        </div>
        <div className="experience__typeContrat">
          {file} {props.typeContrat}
        </div>
      </div>

    </div>

  )

}


export default CardExperiencePro