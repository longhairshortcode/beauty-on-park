import style from "./Map.module.css"

function Map() {
  return (
    <div className={style.componentContainer}>
    {/* <div className={style.googleMapContainer}> */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13203.308020828721!2d-118.31553541284181!3d34.17634040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c001b4f2e899%3A0xbebadb123c25b110!2sPark%20Ave%20Salon!5e0!3m2!1sen!2sus!4v1712074006382!5m2!1sen!2sus"
        width="100%" 
        height="100%" 
        className={style.googleMap}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
  </div>
  )
}

export default Map
