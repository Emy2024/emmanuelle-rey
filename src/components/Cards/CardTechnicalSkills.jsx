function CardTechnicalSkills(props){

    return(
        <>
            <div className="cardTechnicalSkills">
                <img className="cardTechnicalSkills__image" src={props.picture} alt="" />
                <div className="cardTechnicalSkills__text" >{props.software}</div>
            </div>
        </>
    )
}

export default CardTechnicalSkills

