import style from "./ContactForm.module.css"
import { useState } from "react"



function ContactForm() {
  
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    practiceName: "",
    emailAddress: "",
    tel: "",
    url: "",
    selectPlan: "",
    homeAddr: "",
    comment: "",
  })
    // this function is an event handler for input change events
  function handleChange(e){
    // destucturing (get/grab/expose) the name and value props from the event(the active input) target(the input you pressed)
    const {name, value} = e.target
    // reassigning of the user state
    setUserData(prev => ({
      // spread the previous data to store it in memory
      ...prev, 
      [name] : value // update the specifc field indicated by name (name is the id of the input) with the new value
    }))
  }

  function handleSubmit(e){
        e.preventDefault()
   }
  

  return (
    <div className={style.componentContainer}>
      <form className={style.containerForm} onSubmit={handleSubmit}>
      <p className="text-5xl border-b-4 ml-4 m my-20">Tell Us About You</p>
        <div className={style.containerOfBothForms}>
        <div className={style.formLeft}>
          <div className={style.firstLastContainer}>
            <input 
                className={style.firstName}  
                type="text" 
                name="firstName" 
                value={userData.firstName} 
                onChange={handleChange}
                required 
                placeholder="First Name&lowast;"/>
            
            <input 
                className={style.lastName} 
                type="text" 
                name="lastName" 
                value={userData.lastName} 
                onChange={(e) => setUserData(prev=>({...prev, lastName: e.target.value}))} 
                required 
                placeholder="Last Name&lowast;"/>    
          </div>
            {/* <input 
                className={style.practiceName} 
                type="text" 
                name="practiceName" 
                value={userData.practiceName} 
                onChange={(e) => setUserData(prev=>({...prev, practiceName: e.target.value}))}
                required 
                placeholder="Practice name&lowast;"/> */}
            <input 
                className={style.emailAddress} 
                type="email" 
                name="emailAddress" 
                value={userData.emailAddress} 
                onChange={(e) => setUserData(prev=>({...prev, emailAddress: e.target.value}))}
                required 
                placeholder="Email address&lowast;"/>
            <input 
                className={style.tel} 
                type="tel" 
                name="tel" 
                value={userData.tel} 
                onChange={(e)=>setUserData(prev=>({...prev, tel: e.target.value}))}
                required 
                placeholder="Phone&lowast;"/>
            {/* <input 
                className={style.url} 
                type="url" 
                name="url" 
                value={userData.url} 
                onChange={(e)=>setUserData(prev=>({...prev, url: e.target.value}))}
                placeholder="Website"/> */}
        </div>
           
        <div className={style.formRight}> 
            <select 
                className={style.selectPlan} 
                value={userData.selectPlan} 
                onChange={(e)=>setUserData(prev=>({...prev, selectPlan:e.target.value}))}
                required>
                  <option className={style.selectPlanShown}>Select Treatment&lowast;</option>
                  <option>Classic Facial</option>
                  <option>Mama Facial</option>
                  <option>VIP Facial</option>
            </select>
            {/* <input 
              className={style.homeAddr} 
              type="text" 
              name="homeAddr" 
              value={userData.homeAddr} 
              onChange={(e)=>setUserData(prev=>({...prev, homeAddr: e.target.value}))}
              required 
              placeholder="Enter your address&lowast;"/> */}
            <textarea 
              className={style.comment} 
              name="comment" 
              value={userData.comment} 
              onChange={(e)=>setUserData(prev=>({...prev, comment:e.target.value}))}
              placeholder="Got a question? Feel free to type it here!"></textarea>
        </div>
        </div>  
        <div>
        <button type="submit" className={style.submitBut}>Submit</button>                     
        </div>
      </form>



    
     
    </div>
  ) 
}

export default ContactForm