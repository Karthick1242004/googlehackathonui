import React, { useState } from 'react';
import Ac from './Youractivity.module.css';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';


function Activity() {
  return (
    <div className={Ac.homain}>
      <div className={Ac.hocont}>
      <div className={Ac.homn}>
         <h1>Logo</h1>
         <div className={Ac.hm1}>
  <FontAwesomeIcon icon={faHouse} className={Ac.icnm} />
  <Link to='/Home' className={Ac.lin1}>Dashboard</Link>
</div>
<div className={Ac.hm1}>
  <FontAwesomeIcon icon={faCalendarCheck} className={Ac.icnm} />
  <Link to='/Invitation' className={Ac.lin1}>Invitations</Link>
</div>
<div className={Ac.hm1}>
  <FontAwesomeIcon icon={faPaperclip} className={Ac.icnm} />
  <Link to='/Activity' className={Ac.lin1}>Your Activities</Link>
</div>
<div className={Ac.hm1}>
  <FontAwesomeIcon icon={faFacebookMessenger} className={Ac.icnm} />
  <Link to='/Chat' className={Ac.lin1}>Chat</Link>
</div>
<div className={Ac.hm1}>
  <FontAwesomeIcon icon={faGear} className={Ac.icnm} />
  <Link to='/Setting' className={Ac.lin1}>Settings</Link>
</div>

         <div className={Ac.imgc}>
         <div className={Ac.icn}>
          <img src={Logo2} className={Ac.hoimg} alt="profile"/>
         </div>
         <div className={Ac.ac}>
         <h1>Kamalesh J</h1>
         <p>kamaleshj.21cse@kongu.edu</p>
         </div>
         </div>
      </div>
      <div className={Ac.horiz}>
        <h1 className={Ac.mh1}>Your Activities</h1>
        <FontAwesomeIcon icon={faBell} className={Ac.hbell} />
        <dic className={Ac.innerhoriz}>
            <Link to='/Addact' className={Ac.savebutton}>Add event +</Link>
            <div className={Ac.horizcontent}>
               <div className={Ac.horizcontent1}><br></br>Take Medicine<br></br><br></br>Time to taken<br></br>12:00 AM<br></br><br></br><button className={Ac.hoributton}>Edit <FontAwesomeIcon icon={faPencil} className={Ac.fapencil}/></button></div>
               <div className={Ac.horizcontent2}><br></br>Take Medicine<br></br><br></br>Time to taken<br></br>12:00 AM<br></br><br></br><button className={Ac.hoributton}>Edit <FontAwesomeIcon icon={faPencil} className={Ac.fapencil}/></button></div>
               <div className={Ac.horizcontent3}><br></br>Take Medicine<br></br><br></br>Time to taken<br></br>12:00 AM<br></br><br></br><button className={Ac.hoributton}>Edit <FontAwesomeIcon icon={faPencil} className={Ac.fapencil}/></button></div>
            </div>

         </dic>
         </div>
        
      
       
      </div>
      </div>
  
  );
}
export default Activity;
