import { Link } from "react-router-dom"

function MentionsLegales(){
  return(
    <div className="mentionsLegales">
        <div className="mentionsLegales__introduction">
            <h1 className="mentionsLegales__title">Mentions légales</h1>
            <div className="mentionsLegales__content">
              <p>Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
              Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.xxxxxxxxxxx.fr sont : </p>
              
              <h2 className="mentionsLegales__subtitle">Éditeur du Site</h2>
              <p>Responsable du contenu : Emmanuelle Rey</p>
              <p>Prise de contact du webmaster du site internet : voir section "Contact" du présent site.</p>
              
              <h2 className="mentionsLegales__subtitle">Hébergement</h2>
              <p>???</p>

              <h2 className="mentionsLegales__subtitle">Développement</h2>
              <p>Le projet dans son ensemble a été créé et géré par Emmanuelle Rey dans le cadre de la formation <Link className="mentionsLegales__link" to="https://openclassrooms.com/fr/paths/899-developpeur-web"> OpenClassrooms "Développeur Web" (projet final)</Link>.</p>

              <h2 className="mentionsLegales__subtitle">Crédits</h2>
              <p>Visuels xxxxxxxxxxxxxxxxxx </p>

              <h2 className="mentionsLegales__subtitleConditionsGen">Conditions Générales d'Utilisation (CGU)</h2>

              <h2 className="mentionsLegales__subtitle">Article 1 : Objectif du site internet</h2>
              <p>Le présent site internet a pour objectif de présenter le parcours et le profil d'Emmanuelle Rey. Le site, entièrement codé par Emmmanuelle Rey, est également un espace d'entraînement pour développer ses compétences en codage web.</p>

              <h2 className="mentionsLegales__subtitle">Article 2 : Propriété intellectuelle</h2>
              <p>La structure générale du site www.emrey.free.fr, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l’éditeur ou de ses partenaires. 
              Emmanuelle Rey interdit le détournement de ses propres visuels par l’Utilisateur. Toute utilisation à des usages commerciaux et publicitaires est proscrite.</p>

              <h2 className="mentionsLegales__subtitle">Article 3 : Responsabilité</h2>
              <p>Le site décline toute responsabilité concernant les éventuels virus pouvant infecter le matériel informatique de l’Utilisateur après l’utilisation ou l’accès à ce site. Le site ne peut être tenu pour responsable en cas de force majeure ou du fait imprévisible et insurmontable d’un tiers. La garantie totale de la sécurité et la confidentialité des données n’est pas assurée par le site. Cependant, le site s’engage à mettre en œuvre toutes les méthodes requises pour le faire au mieux.
              En outre, l’Editeur met tout en œuvre pour assurer l’exactitude et la mise à jour des informations fournies sur le site, bien que ces informations peuvent être erronées. Le présent site internet ne permet pas l’ouverture aux commentaires des Utilisateurs.</p>

              <h2 className="mentionsLegales__subtitle">Article 4 : Liens hypertextes</h2>
              <p>Le site peut être constitué de liens hypertextes. En cliquant sur ces derniers, l’Utilisateur sortira de la plateforme. Cette dernière n’a pas de contrôle et ne peut pas être tenue responsable du contenu des pages web relatives à ces liens.</p>
          </div>
        </div>
    </div>
  )
}

export default MentionsLegales


