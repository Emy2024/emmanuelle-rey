function TagTechnology(props){

    return(
        <div>
            {props.tags.map((item, index) => (
                <div key={index} className="cardContent__tags">{item}</div>
            ))}
        </div>
    )
}

export default TagTechnology