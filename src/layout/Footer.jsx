import style from "./Footer.module.css"
import logo2 from "../assets/logo2.png"
import { IoLogoFacebook } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";

function Footer() {
  return (
    <div className={style.componentContainer}>
      <div className={style.leftTitleDescriptionSocialsContainer}>
          <img className={style.logoImage} src={logo2} alt="company name logo"></img>
          <p className={style.descriptionBelowLogo}>The best skincare clinic in the market with an expert esthetician, dedicated to helping you get our luminous glow from within with our world-class services and products.</p>
          <div className={style.socialsContainer}>
            <p className={style.socialsParagraph} >
            <span><IoLogoFacebook /></span>
            <span><AiFillTwitterSquare /></span>
            <span><FaSquareInstagram /></span>
            <span><ImYoutube /></span>
            </p>
          </div>
      </div>
      <div className={style.middleTreatmentsContainer}>
          <div className={style.center}>
          <p className={style.treatmentTitle}>Treatments</p>
          <ul className={style.treatmentListContainer}>
            <li className={style.treatment1}>Classic Facial</li>
            <li className={style.treatment2}>Detox Facial</li>
            <li className={style.treatment3}>Chemical Peel</li>
            <li className={style.treatment4}>Acne Facial</li>
          </ul>
          </div>
      </div>
      <div className={style.rightHoursContainer}>
          <div className={style.center}>
          <p className={style.hoursTitle}>Hours</p>
          <ul className={style.hoursListContainer}>
            <li className={style.monThruWed}>Mon-Wed: Closed</li>
            <li className={style.thursday}>Thursday: 10AM - 3PM</li>
            <li className={style.friday}>Friday 8AM - 5PM</li>
            <li className={style.weekend}>Sat & Sun: 11AM - 7PM</li>
          </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer
