import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Accordion(props){
  const chevronPlus = <FontAwesomeIcon icon={faPlus} />
  const chevronMinus = <FontAwesomeIcon icon={faMinus} />
  const localisation = <FontAwesomeIcon icon={faLocationDot} style={{color: "#1ca7ac"}} />

  const [accordionContent, setAccordionContent] = useState("accordion__hide") // montrer ou non le contenu de l'accordéon
  const [isAccordionRotating, setisAccordionRotating] = useState(false)

  function showContent(){
    if(accordionContent){
      return("accordion__hide")
    }
    if(setAccordionContent){
      return("accordion__visible")
    }
  }

  return(
      <div className="accordion">
      <div className="accordion__introduction">
        <div className="accordion__date">{props.duree}</div>
        <div className="accordion__title">{props.diplome} | {props.ecole}</div>
        <div 
          /*  className="accordion__chevron" */
           className={`"accordion__chevron" ${accordionContent ? "accordion__chevron" : "accordion__chevronRotate"}`}
           onClick={() => setAccordionContent(!accordionContent) & setisAccordionRotating(!isAccordionRotating)} 
          >{accordionContent ? chevronPlus : chevronMinus}
          </div>
      </div>
      <div className={showContent()}>
        <div className="accordion__contentLeft">
          <span className="accordion__localisation">{localisation} </span>
          <span className="accordion__localisationProps"> {props.localisation}</span>
        </div>
       <div className="accordion__contentRight">
        <div>Description de la formation :</div>
          <ul className="accordion__ul">
            {props.content.map((element, index) => (
                <li key={index} className="accordion__li"> {element}</li>
            ))}
          </ul>
       </div>
      </div>
    </div>
  )
}

export default Accordion