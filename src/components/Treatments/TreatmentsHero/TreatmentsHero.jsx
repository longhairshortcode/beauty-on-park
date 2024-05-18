import style from "./TreatmentsHero.module.css"
import blondeFacial from "../../../assets/blondeFacial.jpeg"

function TreatmentsHero() {
  return (
    <div className={style.componentContainer}>
      <div className={style.imageContainer}>
        <img   className={style.blondeFacialImage} src={blondeFacial}></img>
        <div className={style.textOverlay}>Treatments</div>
      </div>
    </div>
  )
}

export default TreatmentsHero
