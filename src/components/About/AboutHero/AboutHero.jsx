import style from "./AboutHero.module.css"
import About from "../../../assets/about.png"
import Natasha from "../../../assets/natasha.png"


function AboutHero() {
    return (
        <div className={style.componentContainer}>
          <div className={style.imageContainer}>
            {/* <img className={style.aboutImage} src={AboutImage}></img> */}
            <img className={style.aboutImage} src={Natasha}></img>
            <img className={style.aboutImage} src={About}></img>
            <div className={style.textOverlay}>About</div>
          </div>
        </div>
      )
    }

export default AboutHero
