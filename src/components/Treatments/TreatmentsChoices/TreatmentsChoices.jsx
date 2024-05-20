import style from "./TreatmentsChoices.module.css"
import {Link} from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa"
import facial1 from "../../../assets/facial1.jpeg"
import vip from "../../../assets/vip.jpeg"
import facial3 from "../../../assets/facial3.jpeg"

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
      
      <div className={style.treatmentSinglesAllContainer}>
        <div className={style.treatmentSingleContainer}>
          <img className={style.treatementPicLeft} src={facial3} alt="model face"></img>
          <div className="flex-column ">
          <div className={`${style.treatmentInfoRightContainer} w-full border-none`}>
            <p className="text-5xl m my-20">Mama Facial</p>
            <p className={style.treatmentTime}>1 hour 15 min.</p>
            <p className={style.treatmentPrice}>$130.00</p>
            <p className={style.treatmentDescription}>This is a fantastic facial for acne/blemish prone skin due to hormonal changes for all skin types. During your one hour and 15 minutes with your facialist, you will have a 5 minute consultation, then a custom facial for 45 minutes that deep cleans and medicates with the best topical organic products. You will then continue with a 20 minute face massage to end your session. This will treat acne/blemishes, moisterize, and bring out a natural glow to your skin using only the best non-toxic organic ingredients.</p>
            
            <div className="w-fit text-white bg-[rgb(39,32,32)] py-[12px] px-[17px] flex justify-center intems-center gap-2 items-center m-auto">
              <Link className={style.bookButton}>book now </Link> <FaLongArrowAltRight size={15} className=""/> 
            </div>
            
          </div>
          
          </div>
        </div>
      </div>

      <div className={style.treatmentSinglesAllContainer}>
        <div className={style.treatmentSingleContainer}>
          <img className={style.treatementPicLeft} src={vip} alt="model face"></img>
          <div className="flex-column ">
          <div className={`${style.treatmentInfoRightContainer} w-full border-none`}>
            <p className="text-5xl m my-20">VIP Treatment Facial</p>
            <p className={style.treatmentTime}>2 hour</p>
            <p className={style.treatmentPrice}>$200.00</p>
            <p className={style.treatmentDescription}>This is the VIP facial for all skin types. During your two hours with your facialist, you will have a 5 miunte consultation, then a remarkable facial that deep cleans, hydrates, and targets any blemishes or dry skin for the first hour. Then you will continue with a 20 miunte facial lymphatic drainage massage before a 15 minute laser session customized for your skin type and needs. You will end your session with a 20 miuntes face mask and scalp/neck massage.</p>
            
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
