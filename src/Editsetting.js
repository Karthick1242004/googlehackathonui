import React, { useState } from 'react';
import Ed from './Editsetting.module.css';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function Editsetting() {
  return (
    <div className={Ed.homain}>
      <div className={Ed.hocont}>
      <div className={Ed.homn}>
         <h1>Logo</h1>
         <div className={Ed.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ed.icnm} />
            <p>Dashboard</p>
         </div>
         <div className={Ed.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ed.icnm} />
            <p>Invitations</p>
         </div>
         <div className={Ed.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ed.icnm} />
            <p>Your Activities</p>
         </div>
         <div className={Ed.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ed.icnm} />
            <p>Chat</p>
         </div>
         <div className={Ed.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ed.icnm} />
            <p>Settings</p>
         </div>
         <div className={Ed.imgc}>
         <div className={Ed.icn}>
          <img src={Logo2} className={Ed.hoimg} alt="profile"/>
         </div>
         <div className={Ed.ac}>
         <h1>Kamalesh J</h1>
         <p>kamaleshj.21cse@kongu.edu</p>
         </div>
         </div>
      </div>
      <div className={Ed.horiz}>
        <h1 className={Ed.mh1}>Settings</h1>
        <FontAwesomeIcon icon={faBell} className={Ed.hbell} />
        <div className={Ed.innerhoriz}>
            <h3 className={Ed.h1}>Your Profile Picture</h3>
            <div className={Ed.profilepic}><FontAwesomeIcon icon={faImage}  className={Ed.profile}/><br/><br/><p>Upload Your Photo</p></div>
            <br/>
            <hr/>
            <div className={Ed.settingform1}><form>
    <div className={Ed.setformgroup1}>
        <label htmlFor="textField1">Name</label><br/>
        <input
            type="text"
            className={Ed.setformcontrol1}
            id="textField1"
            name="textField1"
            placeholder="Your name"
        />
    </div>

    <div className={Ed.setformgroup2}>
        <label htmlFor="textField2">Age</label><br/>
        <input
            type="number"
            className={Ed.setformcontrol2}
            id="textField2"
            name="textField2"
            placeholder="Your age"
        />
    </div>

    <div className={Ed.setformgroup3}>
        <label htmlFor="dropdown">Gender</label><br/>
        <select className={Ed.setformcontrol3} id="dropdown" name="dropdown">
            <option value="">Gender</option>
            <option value="option1">Female</option>
            <option value="option2">Male</option>
            <option value="option3">Others</option>
        </select>
    </div>
    <div className={Ed.settingbutton}><button className={Ed.setedit}>Save</button><button className={Ed.setedit1}>Reset</button></div>
    <div className={Ed.settingform2}><div className={Ed.setformgroup1}>
        <label htmlFor="textField1">Email</label><br/>
        <input
            type="email"
            className={Ed.setformcontrol1}
            id="textField1"
            name="textField1"
            placeholder="Your email"
        />
    </div>

    <div className={Ed.setformgroup2}>
        <label htmlFor="textField2">Phone Number</label><br/>
        <input
            type="tel"
            className={Ed.setformcontrol2}
            id="textField2"
            name="textField2"
            placeholder="+91 | XXXXXXXXXX"
        />
    </div>

    <div className={Ed.setformgroup3}>
    <label htmlFor="textField2">Address</label><br/>
        <input
            type="text"
            className={Ed.setformcontrol3}
            id="textField2"
            name="textField2"
            placeholder="Enter Your Address"
        />
    </div></div>
</form>

</div>
            
</div>   

         </div>
        
      
       
      </div>
      </div>
  
  );
}
export default Editsetting;
