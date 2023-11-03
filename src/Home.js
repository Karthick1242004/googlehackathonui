import React, { useState } from 'react';
import Ho from './Home.module.css';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={Ho.homain}>
      <div className={Ho.hocont}>
      <div className={Ho.homn}>
         <h1>Logo</h1>
         <div className={Ho.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Ho.icnm} />
            <Link to='/Home' className={Ho.lin1}>Dashboard</Link>
         </div>
         <div className={Ho.hm1}>
            <FontAwesomeIcon icon={faCalendarCheck} className={Ho.icnm} />
            <Link to='/Invitation' className={Ho.lin1}>Invitations</Link>
         </div>
         <div className={Ho.hm1}>
            <FontAwesomeIcon icon={faPaperclip} className={Ho.icnm}/>
            <Link to='/Activity' className={Ho.lin1}>Your Activities</Link>
         </div>
         <div className={Ho.hm1}>
            <FontAwesomeIcon icon={faFacebookMessenger} className={Ho.icnm}/>
            <Link to='/Chat' className={Ho.lin1}>Chat</Link>
         </div>
         <div className={Ho.hm1}>
            <FontAwesomeIcon icon={faGear} className={Ho.icnm}/>
            <Link to='/Setting' className={Ho.lin1}>Settings</Link>
         </div>
         <div className={Ho.imgc}>
         <div className={Ho.icn}>
          <img src={Logo2} className={Ho.hoimg} alt="profile"/>
         </div>
         <div className={Ho.ac}>
         <h1>Kamalesh J</h1>
         <p>kamaleshj.21cse@kongu.edu</p>
         </div>
         </div>
      </div>
      <div className={Ho.horiz}>
        <h1 className={Ho.mh1}>Dashboard</h1>
        <FontAwesomeIcon icon={faBell} className={Ho.hbell} />
         <div className={Ho.horem}>
            <h1>Reminder</h1>
            <div className={Ho.sub}>
            <div className={Ho.sub1}>
            <p>30 mins to take<br/>your medicine pills </p>
            </div>
            <div className={Ho.sub2}>
              <p>Time to take  <br/><span>10:45 AM</span></p>
            </div>
            <div className={Ho.sub3}>
              <button className={Ho.btn11} type='submit'>in Progress</button>
            </div>
            </div>
         </div>
         <div className={Ho.hotask}>
            <h3>Todays Tasks</h3>
            <div className={Ho.mn}>
              <div className={Ho.mn1}>
                <h3>Take Medicine</h3><br/>
                <p>Time to take</p>
                <p>12:10pm</p>
                <button type='submit' className={Ho.btn12}>Pending</button>
              </div>
              <div className={Ho.mn4}>
              <h3>Take Medicine</h3><br/>
                <p>Time to take</p>
                <p>12:10pm</p>
                <button type='submit' className={Ho.btn12}>Pending</button>
              </div>
              <div className={Ho.mn2}>
              <h3>Take Medicine</h3><br/>
                <p>Time to take</p>
                <p>12:10pm</p>
                <button type='submit' className={Ho.btn12}>Pending</button>
              </div>
              <div className={Ho.mn3}>
              <h3>Take Medicine</h3><br/>
                <p>Time to take</p>
                <p>12:10pm</p>
                <button type='submit' className={Ho.btn12}>Pending</button>
              </div>
            </div>
         </div>
      </div>
      <div className={Ho.cla}>
       
      </div>
      </div>
    </div>
  );
}
export default Home;
