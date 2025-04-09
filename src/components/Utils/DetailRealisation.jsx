function DetailRealisation(props){
  return(
    <>
      <div className="detailRea">
        <div className="detailRea__ligne">
            <div className="detailRea__subtitle">Nom du projet</div>
            <div className="detailRea__description">{props.nom}</div>
        </div>
      <div className="detailRea__ligne">
          <div className="detailRea__subtitle">Concept</div>
          <div className="detailRea__description">{props.concept}</div>
      </div>
      <div className="detailRea__ligne">
          <div className="detailRea__subtitle">Mission</div>
          <div className="detailRea__description">{props.mission}</div>
      </div>
      <div className="detailRea__ligne">
          <div className="detailRea__subtitle">Compétences développées</div>
          <div className="detailRea__table">
            {Array.isArray(props.technologie) ? 
              props.technologie.map((item, index) => {
                return (
                    <p key={index}>{item}</p>  
                )
              })
              :
              props.technologie 
            }
          </div>
      </div>
      <div className="detailRea__ligne">
          <div className="detailRea__subtitle">Société</div>
          <div className="detailRea__description">Projet élaboré dans le cadre de ma formation OpenClassrooms.</div>
      </div>
      <div className="detailRea__ligne">
          <div className="detailRea__subtitle">Date de livraison</div>
          <div className="detailRea__description">{props.date}</div>
      </div>
      </div>
    </>
  )
}

export default DetailRealisation