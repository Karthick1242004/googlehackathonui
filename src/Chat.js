import React from 'react';
import Ch from './Chat.module.css';import Logo2 from './Components/Images/logo2.png';
import Prof from './Components/Images/Profile.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

export default function Chat() {
  return (
    <div className={Ch.homain}>
      <div className={Ch.hocont}>
        <div className={Ch.homn}>
          <h1>Logo</h1>
          <div className={Ch.hm1}>
  <FontAwesomeIcon icon={faHouse} className={Ch.icnm} />
  <Link to='/Home' className={Ch.lin1}>Dashboard</Link>
</div>
<div className={Ch.hm1}>
  <FontAwesomeIcon icon={faCalendarCheck} className={Ch.icnm} />
  <Link to='/Invitation' className={Ch.lin1}>Invitations</Link>
</div>
<div className={Ch.hm1}>
  <FontAwesomeIcon icon={faPaperclip} className={Ch.icnm} />
  <Link to='/Activity' className={Ch.lin1}>Your Activities</Link>
</div>
<div className={Ch.hm1}>
  <FontAwesomeIcon icon={faFacebookMessenger} className={Ch.icnm} />
  <Link to='/Chat' className={Ch.lin1}>Chat</Link>
</div>
<div className={Ch.hm1}>
  <FontAwesomeIcon icon={faGear} className={Ch.icnm} />
  <Link to='/Setting' className={Ch.lin1}>Settings</Link>
</div>

          <div className={Ch.imgc}>
            <div className={Ch.icn}>
              <img src={Logo2} className={Ch.hoimg} alt="profile" />
            </div>
            <div className={Ch.ac}>
              <h1>Kamalesh J</h1>
              <p>kamaleshj.21cse@kongu.edu</p>
            </div>
          </div>
        </div>
        <div className={Ch.horiz}>
          <h1 className={Ch.mh1}>Chats</h1>
          <div className={Ch.chat}>
            <Link to="/inchat"> {/* Use Link for navigation */}
              <div className={Ch.chat1}>
                <img src={Prof} className={Ch.pimg} />
                <div className={Ch.sm}>
                  <h3>Kamala Kanna</h3>
                  <p><span>✓✓</span>Ok sure</p>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/inchat"> {/* Use Link for navigation */}
              <div className={Ch.chat1}>
                <img src={Prof} className={Ch.pimg} />
                <div className={Ch.sm}>
                  <h3>Kamala Kanna</h3>
                  <p><span>✓✓</span>Ok sure</p>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/inchat"> {/* Use Link for navigation */}
              <div className={Ch.chat1}>
                <img src={Prof} className={Ch.pimg} />
                <div className={Ch.sm}>
                  <h3>Kamala Kanna</h3>
                  <p><span>✓✓</span>Ok sure</p>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/inchat"> {/* Use Link for navigation */}
              <div className={Ch.chat1}>
                <img src={Prof} className={Ch.pimg} />
                <div className={Ch.sm}>
                  <h3>Kamala Kanna</h3>
                  <p><span>✓✓</span>Ok sure</p>
                </div>
              </div>
            </Link>
            <hr />
            <Link to="/inchat"> {/* Use Link for navigation */}
              <div className={Ch.chat1}>
                <img src={Prof} className={Ch.pimg} />
                <div className={Ch.sm}>
                  <h3>Kamala Kanna</h3>
                  <p><span>✓✓</span>Ok sure</p>
                </div>
              </div>
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
