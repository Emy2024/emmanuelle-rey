function TagRealisation(props){
  return(
      <>
      {props.array.map((item, index) => (
            <div 
              key={index}  
              className="tagname">
            <div className="cardContent__tags">{item}</div>
        </div>
      ))}
    
      </>
  )
}

export default TagRealisation

