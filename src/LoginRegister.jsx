import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./DashBord";
import { Button } from "semantic-ui-react";

function Profile({ Show, email, OverProfileHide }) {
  const [logout, setLogout] = useState(false)
  const [imgAdd, setImgAdd] = useState(false)
  const [img, setImg] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    setLogout(email === undefined ? false : true)
  }, [])


  console.log(logout, email)
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImg(reader.result);
        setImgAdd(true);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Profile">
      <button onClick={OverProfileHide}>

      {!imgAdd ?(email ? email[0].toUpperCase():'V') :(logout ?<img src={img}/>:'V') }

      </button>


      <div className={Show ? 'Block' : 'Hide'}>
        <form  onSubmit={handleSubmit}>
          <div  className={!logout ? 'Block' : 'Hide'} >
            <h3 style={{color:'white',fontSize:'30px'}}>Vision</h3>
            <br/>
            <Link to='Signin'>
              <Button >Sign in</Button>
            </Link>
            <br/>
            <Link to='Signup'>
              <Button>Sign up</Button>
            </Link>
          </div>
          <div className={logout ? 'Block' : 'Hide'}>
            <label className="file-input-label">
              <input type="file"  onChange={handleFileChange}/>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '100%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  fontSize: '50px'
                }}>
                  {console.log('Imag',imgAdd)}
                {!imgAdd && email ? email[0].toUpperCase() : <img style={{ width: '100px',
                  height: '100px',
                  borderRadius: '100%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex'}} src={img}/>}
              </div>

            </label>


            <button onClick={() => { setLogout(false); navigate('/') }}>Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Profile;