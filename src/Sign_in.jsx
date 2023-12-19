import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Icon, Input } from "semantic-ui-react";


export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();




  const InputEmail = (e) => {
    setEmail(e.target.value);
  }
  const InputPassword = (e) => {
    setPassword(e.target.value)

  }
  const HandeleButton = (e) => {
    e.preventDefault();


    if (!email || !password) {
      alert('Please fill in both email and password fields.');
      return;
    }


    fetch(`http://localhost:3003/check-login/${email}/${password}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Giriş başarılı');
          


          navigate(`/${email}`);
        } else {
          console.error('Email or password is incorrect');
          
          
          alert('Email or password is incorrect');

        }
      })
      .catch(error => {
        console.error('Error while checking email existence:', error);
      });
  }
  const body=document.querySelector('body');
  body.className='custom-body-dark'
  return (
    <div className="Login">
      <h2>Vision</h2>
      <h2>Sign in EagleVision</h2>
      <form onSubmit={HandeleButton}>
        <label style={{ display: 'none' }}>Email</label>
        <Input iconPosition='left' placeholder="Email"   >
          <Icon name='at' />
          <input type="email" onChange={InputEmail} value={email}/>
        </Input>
        <br />
        <label style={{ display: 'none' }}>Password</label>
        <Input iconPosition='left' placeholder="Password" onChange={InputPassword} type="password" value={password} />
        <br />
        <Button>Log in</Button>
      </form>
    </div>
  );
}