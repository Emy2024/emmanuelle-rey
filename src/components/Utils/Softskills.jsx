function Softskills() {
    const tableSoftSkills = ["Créative", "Curieuse", "Autonome", "Humble", "Enthousiaste", "Persévérante", "Proactive"]
    
    return(
        <div>
            <ul className="softSkills__ul">
                {tableSoftSkills.map((skill, index) => (
                    <li key={index} className="softSkills__li">{skill}</li>
                ))}
            </ul>

        </div>
    )
}

export default Softskills