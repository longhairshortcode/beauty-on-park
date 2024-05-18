import style from "./LocationHero.module.css"
import locationImage from "../../../assets/location.jpeg"

function LocationHero() {
  return (
    <div className={style.componentContainer}>
      <div className={style.imageContainer}>
        <img   className={style.locationImage} src={locationImage}></img>
        <div className={style.textOverlay}>Location</div>
      </div>
    </div>
  )
}

export default LocationHero