import React from 'react';
import In from './Inchat.module.css';
import Prof from './Components/Images/Profile.png';
import Logo2 from "./Components/Images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

export default function Inchat() {
  return (
    <div className={In.homain}>
      <div className={In.hocont}>
        <div className={In.homn}>
          <h1>Logo</h1>
          <div className={In.hm1}>
            <FontAwesomeIcon icon={faHouse} className={In.icnm} />
            <p>Dashboard</p>
          </div>
          <div className={In.hm1}>
            <FontAwesomeIcon icon={faCalendarCheck} className={In.icnm} />
            <p>Invitations</p>
          </div>
          <div className={In.hm1}>
            <FontAwesomeIcon icon={faPaperclip} className={In.icnm} />
            <p>Your Activities</p>
          </div>
          <div className={In.hm1}>
            <FontAwesomeIcon icon={faFacebookMessenger} className={In.icnm} />
            <p>Chat</p>
          </div>
          <div className={In.hm1}>
            <FontAwesomeIcon icon={faGear} className={In.icnm} />
            <p>Settings</p>
          </div>
          <div className={In.imgc}>
            <div className={In.icn}>
              <img src={Logo2} className={In.hoimg} alt="profile" />
            </div>
            <div className={In.ac}>
              <h1>Kamalesh J</h1>
              <p>kamaleshj.21cse@kongu.edu</p>
            </div>
          </div>
        </div>
        <div className={In.horiz}>
          <h1 className={In.mh1}>Chats</h1>
          <div className={In.chat}>
            <div className={In.chat1}>
              <img src={Prof} className={In.pimg} />
              <div className={In.sm}>
                <h3>Kamala Kanna</h3>
                <FontAwesomeIcon icon={faVideo} className={In.icnm11}/>
                <FontAwesomeIcon icon={faPhone}  className={In.icnm12}/>
              </div>
            </div>
            <hr className={In.lnm1}/>
            <div className={In.mch1}>
                <p>“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates.</p>
            </div>
            <div className={In.mch2}>
                <p>“Lorem ipsum” dummy text is used by many web-developers to test how their HTML templates.</p>
            </div>
            <div className={In.time}>
            <p><span>✓✓</span>8.15pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
