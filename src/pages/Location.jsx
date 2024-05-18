import style from "./Styles/Location.module.css"
import Map from "../components/Location/Map/Map.jsx"
import { FaPhoneVolume } from "react-icons/fa6";
import LocationHero from "../components/Location/LocationHero/LocationHero.jsx";

function Location() {
  return (
    <div className={style.componentContainer}>
        <LocationHero/>       
        <h1 className={style.salonTitle}><span className={style.italic}>Beauty On Park</span> Location</h1>
       
        <div className={style.infoAndMapContainer}>
          <div className={style.infoLeftContainer}>
            <div className={style.addressContainer}>
              <p className={style.addressNumAndStreet}>123 Main Street</p>
              <p className={style.addressCityAndZip}>Los Angeles, CA 90210</p>
            </div>  
            <div className={style.numberContainer}>
              <p className={style.number}><FaPhoneVolume className={style.phoneIcon} />+1 (323) 555-5555</p>
            </div>  
            <div className={style.hoursContainer}>
              <p className={style.hoursTitle}>Hours of Operation:</p>
              <div className={style.daysAndTimesContainer}>
                <ul className={style.hoursDaysContainer}>
                  <li className={style.monThruWed}>Mon-Wed</li>
                  <li className={style.thursday}>Thursday</li>
                  <li className={style.friday}>Friday</li>
                 <li className={style.weekend}>Sat & Sun</li>
                </ul>
                <ul className={style.hoursTimesContainer}>
                  <li className={style.monThruWedTime}>Closed</li>
                  <li className={style.thursdayTime}>10:00AM - 3:00PM</li>
                  <li className={style.fridayTime}>08:00AM - 5:00PM</li>
                  <li className={style.weekendTime}>11:00AM - 7:00PM</li>
                </ul>
              </div>
            </div>
          </div>    
          

          <div className={style.mapRightContainer}>
            <Map/>
          </div>
        </div>    
    
    </div>
  )
}

export default Location

