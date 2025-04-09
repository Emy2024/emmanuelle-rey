import { Link } from "react-router"
import {useParams} from "react-router"
import Card from "../components/Cards/Card"
import Banner from "../components/Utils/Banner"
import Button from '../components/Utils/Button'
import data from '../data/realisations.json'
import DetailRealisation from '../components/Utils/DetailRealisation'
import React from "react";

function FicheRealisations(){
    const {id} = useParams()
    const dataRealisations = data.filter(realisation => realisation.id === id)

    return(
        <div className="ficheRea">
            <div className="ficheRea__introduction">
                <h1>Etude de cas</h1>
                {dataRealisations.map((element) => (
                    <Banner
                        key={element.id}
                        image={element.coverRealisations}
                        textAlt={element.nomProjet}
                        link="#"
                    />
                ))}
                <div className="ficheRea__introductionTextAndButton">
                    <h2 className="ficheRea__introductionText">Détail du projet</h2>
                    <div className= "ficheRea__button">
                        {dataRealisations.map((element, index) => (
                            <Button
                                key={index}
                                link={element.github}
                                name="Code Github"
                            />
                        ))}
{/*                         {dataRealisations.map((element, index) => (
                            <Button
                                key={index}
                                link={element.live}
                                name="Voir le projet"
                            />
                        ))} */}
                    </div>
                </div>
            
                {dataRealisations.map((element, index) => (
                    <DetailRealisation 
                        key={index}
                        nom={element.nomProjet}
                        concept={element.concept}
                        mission={element.mission}
                        technologie ={element.technologie}
                        date={element.dateLivraison}
                    />
                ))}
                <div className="ficheRea__Apercu">
                    <h2 className="ficheRea__introductionApercu">Aperçu du projet</h2>
                    <div className="ficheRea__photosContainer">
                    
                    {/*  Double boucle pour aller jusqu'à l'élément "images" */}
                        {dataRealisations.map((element) => (
                        element.images.map((image, imgIndex) => (
                            <img 
                                key={`${element.id}-${imgIndex}`}  //concaténation id
                                className="ficheRea__photo" 
                                src={image} 
                                alt={`Image du projet ${element.nomProjet}`} 
                            />
                            ))
                        ))}
                    </div>
                </div>


                <div className="ficheRea__autresProjets">
                    <h2 className="ficheRea__title">Consultez les autres projets</h2>
                    <div className="ficheRea__autresProjetsContainer">
                    <ul className="ficheRea__ul">
                        {data.map((realisation) => {
                            return(
                            <li className="ficheRea__li" key={realisation.id}>
                                <Link className="realisations__cardsLink" to={`/realisations/${realisation.id}`}>
                                <Card 
                                    title={realisation.nomProjet} 
                                    date={realisation.dateLivraison}
                                    img={realisation.coverHome}
                                    arrayTags={realisation.technologie}
                                />
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FicheRealisations