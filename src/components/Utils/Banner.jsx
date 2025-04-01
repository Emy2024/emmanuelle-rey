function Banner(props){
  return(
    <>
      <div className= "banner">
        <img src={props.image} alt={props.textAlt} />
      </div>
    </>
  )
}

export default Banner