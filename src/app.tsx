import "./app.css";
import { ComponentChildren } from "preact";
import charrue from "./images/charrue.jfif";
import canon from "./images/canon.jfif";
import curling from "./images/curling.jfif";
import pelle from "./images/pelle.jfif";
import perceuse from "./images/perceuse.jfif";
import tuque from "./images/tuque.jfif";
import poele from "./images/poele.jfif";
import patins from "./images/patins.jfif";
import sac from "./images/sac.jfif";
import truite from "./images/truite.jfif";

const motsCles = {
  boite: "boîte",
  trebuche: "trébuche",
  trebucher: "trébucher",
};

type Outil = {
  apresUtilisation?: ComponentChildren,
  description?: ComponentChildren,
  momentUtilisation?: ComponentChildren,
  image?: string,
  nom: string,
};

const ressources = {
  apresUtilisations: {
    defausser: "Défausser après utilisation",
  },
  momentsUtilisations: {
    chezQuelquUnDAutre: (
      <>
        S'utilise
        {" "}
        <strong>chez un autre pingouin</strong>
      </>
    ),
    nImporteQuand: (
      <>
        S'utilise
        {" "}
        <strong>n'importe quand</strong>
      </>
    ),
  },
};

const outils: Outil[] = [
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Ces patins t'empêchent d'échapper ta
        {" "}
        {motsCles.boite}
        {" "}
        si tu atteris sur une
        {" "}
        <strong>case glacée</strong>
        .
      </>
    ),
    image: patins,
    momentUtilisation: (
      <>
        S'utilisent
        {" "}
        <strong>lors</strong>
        {" "}
        d'un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Patins à glace",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Lance cette pierre sur un chemin. Le
        {" "}
        <strong>premier</strong>
        {" "}
        pingouin qu'elle rencontre
        {" "}
        <strong>trébuche</strong>
        .
      </>
    ),
    image: curling,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Pierre de curling",
  },
  {
    apresUtilisation: (
      <>
        Placer dans
        {" "}
        <strong>l'inventaire</strong>
        {" "}
        du propriétaire
      </>
    ),
    description: (
      <>
        Dépose-la
        {" "}
        <strong>chez un pingouin</strong>
        {" "}
        et il va
        {" "}
        <strong>te laisser repartir</strong>
        {" "}
        avec la
        {" "}
        {motsCles.boite}
        {" "}
        de ton choix.
      </>
    ),
    image: truite,
    momentUtilisation: ressources.momentsUtilisations.chezQuelquUnDAutre,
    nom: "Truite d'échange",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Cet orque te catapulte jusqu'à
        {" "}
        <strong>chez toi</strong>
        .
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Orque",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Fais
        {" "}
        <strong>{motsCles.trebucher}</strong>
        {" "}
        tous les pingouins que tu rencontres lors de ce
        {" "}
        <strong>déplacement</strong>
        .
      </>
    ),
    image: charrue,
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Charrue",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Utilise cette peinture pour te camoufler. Un pingouin
        {" "}
        <strong>ne verra pas</strong>
        {" "}
        que tu es chez lui.
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.chezQuelquUnDAutre,
    nom: "Peinture blanche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Tire sur l'igloo d'un pingouin. Il
        {" "}
        <strong>perd</strong>
        {" "}
        la
        {" "}
        {motsCles.boite}
        {" "}
        <strong>de son choix</strong>
        .
      </>
    ),
    image: canon,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Canon à neige",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Le vendeur te laisse
        {" "}
        <strong>regarder</strong>
        {" "}
        dans les
        {" "}
        <strong>deux premières</strong>
        {" "}
        {motsCles.boite}
        s et de choisir laquelle prendre.
      </>
    ),
    momentUtilisation: (
      <>
        S'utilise chez
        {" "}
        <strong>Iglea</strong>
      </>),
    nom: "Photo comprommettante",
  },
  { image: pelle, nom: "Pelle" },
  { image: perceuse, nom: "Perceuse à glace" },
  { image: tuque, nom: "Tuque" },
  {
    description: <>Installe-le dans un igloo pour faire fondre une boite par tour. Le pingouin doit retourner chez lui pour l'éteindre.</>,
    image: poele,
    momentUtilisation: <>S'utilise dans un igloo</>,
    nom: "Poêle à bois",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>
      Il te permet de déplacer une
      {" "}
      {motsCles.boite}
      {" "}
      supplémentaire.

                 </>,
    image: sac,
    momentUtilisation: <>
      S'utilise chez
      {" "}
      <strong>Iglea</strong>
    </>,
    nom: "Sac à dos",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Si un pingouin se trouve sur ta case, tu peux le déplacer avec toi lors de ton tour.</>,
    momentUtilisation: <>
      S'utilise
      {" "}
      <strong>avant</strong>
      {" "}
      un
      {" "}
      <strong>déplacement</strong>
                       </>,
    nom: "Brouette",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Glisse jusqu'au bout d'un chemin.</>,
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Carzy Carpet",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>En agitant le sac, tu convaincs un pingouin d'avancer dans ta direction lors de son tour.</>,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Poisson séché",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Dévoile une case de ton choix.</>,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Carte au trésor",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Tu pêches un outil qui se trouve dans l'inventaire d'un pingouin de ton choix.</>,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Canne à pêche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Tu t'enfermes dans un igloo jusqu'à ton prochain tour. Aucun pingouin ne peut entrer ou sortir.</>,
    momentUtilisation: (<>S'utilise dans un igloo</>),
    nom: "Planches de bois",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (<>
      Permet de
      {" "}
      <strong>boucher un trou</strong>
      {" "}
      de façon permanente.
    </>),
    momentUtilisation: (<>S'utilise sur une case trou</>),
    nom: "Gros bouchon de liège",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Vise un pingouin qui transporte une
        {" "}
        {motsCles.boite}
        . Le pingouin tombe à l'eau, la
        {" "}
        {motsCles.boite}
        {" "}
        reste sur la case.

      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Boule de neige",
  },
];

function App() {
  return (
    <div style={{
      alignItems: "flex-start", display: "flex", flexWrap: "wrap", gap: "0.5em",
    }}
    >
      {outils.map((carte) => (
        <div className="carte">
          <h1>{carte.nom}</h1>
          <div className="instructions">
            <p><i>{carte.momentUtilisation}</i></p>
            <p>{carte.description}</p>
            <p><i>{carte.apresUtilisation}</i></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
