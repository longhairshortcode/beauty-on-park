import style from "./ContactHero.module.css"
import Flowers from "../../../assets/flowers.png" 

function ContactHero() {
    return (
        <div className={style.componentContainer}>
          <div className={style.imageContainer}>
            {/* <img className={style.aboutImage} src={AboutImage}></img> */}
            <img className={style.flowersImage} src={Flowers}></img>
            <div className={style.textOverlay}>Contact</div>
          </div>
        </div>
      )
    }



export default ContactHero

