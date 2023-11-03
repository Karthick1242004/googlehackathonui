import React from 'react';
import Iv from './Invitation.module.css';
import Logo2 from './Components/Images/logo2.png';
import Prof from './Components/Images/Profile.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

export default function Invitation() {
  return (
    <div className={Iv.homain}>
      <div className={Iv.hocont}>
        <div className={Iv.homn}>
          <h1>Logo</h1>
          <div className={Iv.hm1}>
            <FontAwesomeIcon icon={faHouse} className={Iv.icnm} />
            <Link to='/Home' className={Iv.lin1}>Dashboard</Link>
         </div>
         <div className={Iv.hm1}>
            <FontAwesomeIcon icon={faCalendarCheck} className={Iv.icnm} />
            <Link to='/Invitation' className={Iv.lin1}>Invitations</Link>
         </div>
         <div className={Iv.hm1}>
            <FontAwesomeIcon icon={faPaperclip} className={Iv.icnm}/>
            <Link to='/Activity' className={Iv.lin1}>Your Activities</Link>
         </div>
         <div className={Iv.hm1}>
            <FontAwesomeIcon icon={faFacebookMessenger} className={Iv.icnm}/>
            <Link to='/Chat' className={Iv.lin1}>Chat</Link>
         </div>
         <div className={Iv.hm1}>
            <FontAwesomeIcon icon={faGear} className={Iv.icnm}/>
            <Link to='/Setting' className={Iv.lin1}>Settings</Link>
         </div>
          <div className={Iv.imgc}>
            <div className={Iv.icn}>
              <img src={Logo2} className={Iv.hoimg} alt="profile" />
            </div>
            <div className={Iv.ac}>
              <h1>Kamalesh J</h1>
              <p>kamaleshj.21cse@kongu.edu</p>
            </div>
          </div>
        </div>
        <div className={Iv.horiz}>
          <h1 className={Iv.mh1}>Dashboard</h1>
          <div className={Iv.chat}>
             <div className={Iv.chat1}>
              <img src={Prof} className={Iv.pimg}/>
                <h3>Dr.Kamala Kanna</h3>
                <p>Cardiology</p>
                <button className={Iv.ivbt}>Connect</button>
             </div>
             <hr/>
             <div className={Iv.chat1}>
             <img src={Prof} className={Iv.pimg}/>
                <h3>Dr.Kamala Kanna</h3>
                <p>Cardiology</p>
                <button className={Iv.ivbt}>Connect</button>
             </div>
             <hr/>
             <div className={Iv.chat1}>
             <img src={Prof} className={Iv.pimg}/>
                <h3>Dr.Kamala Kanna</h3>
                <p>Cardiology</p>
                <button className={Iv.ivbt}>Connect</button>
             </div>
             <hr/>
             <div className={Iv.chat1}>
             <img src={Prof} className={Iv.pimg}/>
                <h3>Dr.Kamala Kanna</h3>
                <p>Cardiology</p>
                <button className={Iv.ivbt}>Connect</button>
             </div>
             <hr/>
             <div className={Iv.chat1}>
             <img src={Prof} className={Iv.pimg}/>
                <h3>Dr.Kamala Kanna</h3>
                <p>Cardiology</p>
                <button className={Iv.ivbt}>Connect</button>
             </div>
             <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}
