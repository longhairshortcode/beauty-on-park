import { FaLongArrowAltRight } from "react-icons/fa"
import style from "./Styles/Treatments.module.css"
import TreatmentsChoices from "../components/Treatments/TreatmentsChoices/TreatmentsChoices.jsx" 
import TreatmentsHero from "../components/Treatments/TreatmentsHero/TreatmentsHero.jsx"

function Treatments() {
  return (
    <div className={style.componentContainer}>
      <TreatmentsHero/>

        <TreatmentsChoices/>
      </div>

  )
}

export default Treatments
