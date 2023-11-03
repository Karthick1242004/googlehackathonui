import React, { useState } from 'react';
import Aa from './Addact.module.css';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


function Addact() {
  return (
    <div className={Aa.homain}>
    <div className={Aa.hocont}>
    <div className={Aa.homn}>
       <h1>Logo</h1>
       <div className={Aa.hm1}>
          <FontAwesomeIcon icon={faHouse} className={Aa.icnm} />
          <p>Dashboard</p>
       </div>
       <div className={Aa.hm1}>
          <FontAwesomeIcon icon={faHouse} className={Aa.icnm} />
          <p>Invitations</p>
       </div>
       <div className={Aa.hm1}>
          <FontAwesomeIcon icon={faHouse} className={Aa.icnm} />
          <p>Your Activities</p>
       </div>
       <div className={Aa.hm1}>
          <FontAwesomeIcon icon={faHouse} className={Aa.icnm} />
          <p>Chat</p>
       </div>
       <div className={Aa.hm1}>
          <FontAwesomeIcon icon={faHouse} className={Aa.icnm} />
          <p>Settings</p>
       </div>
       <div className={Aa.imgc}>
       <div className={Aa.icn}>
        <img src={Logo2} className={Aa.hoimg} alt="profile"/>
       </div>
       <div className={Aa.ac}>
       <h1>Kamalesh J</h1>
       <p>kamaleshj.21cse@kongu.edu</p>
       </div>
       </div>
    </div>
    <div className={Aa.horiz}>
      <h1 className={Aa.mh1}>Activity</h1>
      <FontAwesomeIcon icon={faBell} className={Aa.hbell} />
      <div className={Aa.innerhoriz}>
        <div className={Aa.addoption}>
          <Link to='/Addact' className={Aa.addsavebutton1}>Save</Link>
          <Link to='/Addact' className={Aa.addsavebutton2}>Delete</Link><br></br> </div>
          <div className={Aa.adddetails}>
          <form >
        <div className={Aa.formgroup}>
          <label htmlFor="textField">Text Field</label>
          <input
            type="text"
            className={Aa.formcontrol}
            id="textField"
            name="textField"
            placeholder='Take Medicine'
          />
        </div>

        <div className={Aa.timeformgroup}>
          <label >Duration</label>
          <input
            type="time"
            className={Aa.timeformcontrol}
            id="timeInput"
            name="timeInput"
            min="00:00"
            step="1"
            
          />
          <input
            type="time"
            className={Aa.timeformcontrolsecond}
            id="timeInput"
            name="timeInput"
            min="00:00"
            step="1"
            
          />

        </div>

        <div className={Aa.formgroup}>
          <label htmlFor="dropdown1">To Repeat</label>
          <select className={Aa.dropformcontrol} id="dropdown1" name="dropdown1">
            <option value="">Your Preference</option>
            <option value="option1">Do not repeat</option>
            <option value="option2">Daily</option>
            <option value="option3">Alternative </option>
          </select>
        </div>

        <div className={Aa.formgroup}>
          <label htmlFor="dropdown2">Remainder</label>
          <select className={Aa.dropformcontrol1} id="dropdown2" name="dropdown2">
            <option value="">Your preference</option>
            <option value="option1">30 minutes before</option>
            <option value="option2">30 minutes before</option>
            <option value="option3">1 hour before</option>
          </select>
        </div>

        <div className={Aa.formgroup}>
          <label htmlFor="dropdown3">Add Description</label>
          <select className={Aa.dropformcontrol} id="dropdown3" name="dropdown3">
            <option value="">Add Description</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        </form>
      
       </div>
         
        </div>

       </div>
      
    
     
    </div>
    </div>

  );
}
export default Addact;