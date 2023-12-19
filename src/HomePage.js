
import Motor from './Motor';
import Menu from './Menu';
import { MenuDiv } from './Menu';
import { useState } from 'react';
import Profile from './LoginRegister'
import Dashboard from './DashBord';
import { Link, useParams } from 'react-router-dom';

function HomePage() {
  const [hide, setHide] = useState(false);
  const [fhide, setFhide] = useState();
  const {email}=useParams('')
  const OverHide = (e) => {
    setFhide(!hide);
    setHide(!hide);
  }

  const [profileHide, setProfileHide] = useState(false);
  const [fprofileHide, setFprofileHide] = useState();

  const OverProfileHide = (e) => {
    setFprofileHide(!profileHide);
    setProfileHide(!profileHide);
  }
  const body=document.querySelector('body');
  body.className='custom-body-light'
  return (
    <div className='AppFix'>
        <div>
          <MenuDiv value={fhide} />
          <Menu OverHide={OverHide} />
        </div>

        <div>

          <Profile Show={fprofileHide} email={email} OverProfileHide={OverProfileHide} />

        </div>

        <div className="App">
          
          <div className='Search'>
            <Motor />
          </div>

        </div>
    </div>
  );
}

export default HomePage;
