import CardTechnicalSkills from "../Cards/CardTechnicalSkills"
import data from "../../data/technical_skills_data.json"
import skillsPicture from "../../assets/alesia_kazantceva_unsplash.webp"

function Skills(){
    return(
        <div className="skills">
            <div className="skills__left">
                <div className="skills__leftCover"></div>
                <img src={skillsPicture} alt="Photographie d'un ordinateur sur une table dans un environnement cosy"></img>
            </div>

            <div className="technicalSkills">
                    <h2 className="technicalSkills__Title">Compétences techniques</h2>
                    <div className="technicalSkills__Cards">
                        {data.map((skill, index) => (
                            < CardTechnicalSkills
                                key={index}
                                picture = {skill.Image}
                                software={skill.Text}
                            />
                        ))}

                    </div>
                   
            </div>
        </div>
    )
}

export default Skills

