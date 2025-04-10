import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Button(props){
  const arrow = <FontAwesomeIcon icon={faArrowRight} />
  return(
    <div className="btn__container">
    <div className="btn">
      <Link className="btn__link" to={props.link}>{props.name}</Link> 
      <span className="btn__arrow">{arrow}</span>
    </div>
    </div>
  )
}

export default Button