import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Card(props){
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="card">
        <div className="card__arrow">{arrow}</div>
            <div className="card__imageContainer">
                <img className="card__image" src={props.img} alt="" />
            </div>
            <div className="cardContent">
                <div className="cardContent__tagname">
                    {props.arrayTags.map((item, index) => (
                        <div key={index} >
                            <div className="cardContent__tags">{item}</div>
                        </div>
                    ))}
                </div>
                <div className="cardContent__date">{props.date}</div>
                <div className="cardContent__title">{props.title}</div>
                <div className="cardContent__description">{props.description}</div>
            </div>
        </div>
    )
}

export default Card




