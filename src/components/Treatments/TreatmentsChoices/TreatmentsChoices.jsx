import style from "./TreatmentsChoices.module.css"
import {Link} from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa"
import facial1 from "../../../assets/facial1.jpeg"

function TreatmentsChoices() {
  return (
    <div className={style.componentContainer}>
      <div className={style.treatmentSinglesAllContainer}>
        <div className={style.treatmentSingleContainer}>
          <img className={style.treatementPicLeft} src={facial1} alt="model face"></img>
          <div className="flex-column ">
          <div className={`${style.treatmentInfoRightContainer} w-full border-none`}>
            <p className="text-5xl m my-20">Classic Facial</p>
            <p className={style.treatmentTime}>1 hour</p>
            <p className={style.treatmentPrice}>$100.00</p>
            <p className={style.treatmentDescription}>This is the classic facial for all skin types. During your one hour with your facialist, you will have a 5 miunte consultation, then a blissful classic facial for 45 minutes, and a 10 minutes face massage to end your session. This will clean out your pores, moisterize, and rejuvinate your skin using only the best non-toxic organic ingredients.</p>
            
            <div className="w-fit text-white bg-[rgb(39,32,32)] py-[12px] px-[17px] flex justify-center intems-center gap-2 items-center m-auto">
              <Link className={style.bookButton}>book now </Link> <FaLongArrowAltRight size={15} className=""/> 
            </div>
            
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatmentsChoices
