import React, { useState } from 'react';
import Se from './Setting.module.css';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Setting() {
  return (
    <div className={Se.homain}>
      <div className={Se.hocont}>
      <div className={Se.homn}>
         <h1>Logo</h1>
         <div className={Se.hm1}>
  <FontAwesomeIcon icon={faHouse} className={Se.icnm} />
  <Link to='/Home' className={Se.lin1}>Dashboard</Link>
</div>
<div className={Se.hm1}>
  <FontAwesomeIcon icon={faCalendarCheck} className={Se.icnm} />
  <Link to='/Invitation' className={Se.lin1}>Invitations</Link>
</div>
<div className={Se.hm1}>
  <FontAwesomeIcon icon={faPaperclip} className={Se.icnm} />
  <Link to='/Activity' className={Se.lin1}>Your Activities</Link>
</div>
<div className={Se.hm1}>
  <FontAwesomeIcon icon={faFacebookMessenger} className={Se.icnm} />
  <Link to='/Chat' className={Se.lin1}>Chat</Link>
</div>
<div className={Se.hm1}>
  <FontAwesomeIcon icon={faGear} className={Se.icnm} />
  <Link to='/Setting' className={Se.lin1}>Settings</Link>
</div>

         <div className={Se.imgc}>
         <div className={Se.icn}>
          <img src={Logo2} className={Se.hoimg} alt="profile"/>
         </div>
         <div className={Se.ac}>
         <h1>Kamalesh J</h1>
         <p>kamaleshj.21cse@kongu.edu</p>
         </div>
         </div>
      </div>
      <div className={Se.horiz}>
        <h1 className={Se.mh1}>Settings</h1>
        <FontAwesomeIcon icon={faBell} className={Se.hbell} />
        <div className={Se.innerhoriz}>
            <h3 className={Se.h1}>Your Profile Picture</h3>
            <div className={Se.profilepic}><br></br><br></br><p>Upload Your Photo</p></div>
            <br></br>
            <hr></hr>
            <div className={Se.settingform1}><form>
    <div className={Se.setformgroup1}>
        <label htmlFor="textField1">Name</label><br></br>
        <input
            type="text"
            className={Se.setformcontrol1}
            id="textField1"
            name="textField1"
            placeholder="Your name"
        />
    </div>

    <div className={Se.setformgroup2}>
        <label htmlFor="textField2">Age</label><br></br>
        <input
            type="number"
            className={Se.setformcontrol2}
            id="textField2"
            name="textField2"
            placeholder="Your age"
        />
    </div>

    <div className={Se.setformgroup3}>
        <label htmlFor="dropdown">Gender</label><br></br>
        <select className={Se.setformcontrol3} id="dropdown" name="dropdown">
            <option value="">Gender</option>
            <option value="option1">Female</option>
            <option value="option2">Male</option>
            <option value="option3">Others</option>
        </select>
    </div>
    <div className={Se.settingbutton}><button className={Se.setedit}>Edit</button></div>
    <div className={Se.settingform2}><div className={Se.setformgroup1}>
        <label htmlFor="textField1">Email</label><br></br>
        <input
            type="email"
            className={Se.setformcontrol1}
            id="textField1"
            name="textField1"
            placeholder="Your email"
        />
    </div>

    <div className={Se.setformgroup2}>
        <label htmlFor="textField2">Phone Number</label><br></br>
        <input
            type="tel"
            className={Se.setformcontrol2}
            id="textField2"
            name="textField2"
            placeholder="+91 | XXXXXXXXXX"
        />
    </div>

    <div className={Se.setformgroup3}>
    <label htmlFor="textField2">Address</label><br></br>
        <input
            type="text"
            className={Se.setformcontrol3}
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
export default Setting;
