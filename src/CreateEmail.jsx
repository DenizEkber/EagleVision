import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Icon, Input, Label } from 'semantic-ui-react';

export default function CreateEmail() {
  const { name, surname } = useParams();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let randomEmail = generateRandomEmail(name, surname);

        while (await isEmailExists(randomEmail)) {
          // If the random email already exists, generate a new one
          randomEmail = generateRandomEmail(name, surname);
        }

        // Set the non-existing random email
        setEmail(randomEmail);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [name, surname]);

  const generateRandomEmail = (name, surname) => {
    return `${name.toLowerCase()}${surname.toLowerCase()}${Math.floor(Math.random() * 1000 + 1)}`;
  };

  const isEmailExists = async (emailToCheck) => {
    try {
      const response = await fetch(`http://localhost:3002/check-email/${emailToCheck}@vision.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();
      return data.success && data.exists;
    } catch (error) {
      console.error('Error while checking email existence:', error);
      return false;
    }
  };

  const InputEmail = (e) => {
    const inputValue = e.target.value;


    const sanitizedValue = inputValue.replace(/[^a-zA-Z0-9.]/g, '');

    setEmail(sanitizedValue);
  };

  const HandleButton = (e) => {
    e.preventDefault();
    if (!email ) {
      alert('Please fill in email fields.');
      return;
    }


    fetch(`http://localhost:3002/check-email/${email.toLowerCase()}@vision.com`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          if (data.exists) {
            alert('Email already exists. Please choose a different email.');
          } else {
            navigate(`/createpassword/${name}/${surname}/${email.toLowerCase()}@vision.com`);
            console.log('salam');
          }
        } else {
          console.error('Error while checking email existence:', data.error);
        }
      })
      .catch(error => {
        console.error('Error while checking email existence:', error);
      });
  };

  const body = document.querySelector('body');
    body.className = 'custom-body-dark'
  return (
    <div className='Login'>
      <h2>Vision</h2>
      <h3>Create New Email</h3>

      <form onSubmit={HandleButton}>

        <div>
          <Input iconPosition='left' type='text'  >
            <Icon name='at' />
            <input placeholder='New Email' value={email} onChange={InputEmail} />
            
          </Input>
          <label >@vision.com</label>

        </div>
        <br />
        <Button type="submit">Next</Button>
      </form>
    </div>
  );
}
