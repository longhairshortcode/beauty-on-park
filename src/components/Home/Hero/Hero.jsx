import style from "./Hero.module.css"
import homePic from "../../../assets/homePic.png"

function Hero() {
  return (
    <div className={style.componentContainer}>
      <img className={style.homePic} src={homePic} alt="model with a a flower on head and big earrings"></img>
      <div className={style.missionContainer}>
        <p className={style.missionParagraph}>
          Welcome to <span className={style.italic}>Beauty On Park</span>, a leading facial spa dedicated to refined and relaxed beauty in the heart of Los Angeles by beauty experts Natasha Mason and Lori Liao.
        </p>
      </div>
    </div>
  )
}

export default Hero
