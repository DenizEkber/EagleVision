import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react';

export default function CreatePassword() {
    const { name, surname, email } = useParams()
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const InputPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSaveToDatabase = (e) => {
        e.preventDefault();
        if (!password ) {
            alert('Please fill in password fields.');
            return;
          }
          
        fetch(`http://localhost:3001/save-to-database/${name}/${surname}/${email}/${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data);
            })
            .catch(error => {
                console.error('Error while saving to database:', error);
            });
            navigate(`/complite/${email}`);
    };

    
    return (
        <div className='Login'>
            <form onSubmit={handleSaveToDatabase}>
                <Input placeholder='New Password...' type='password' value={password} onChange={InputPassword} />
                <br/>
                <Button>Create Email</Button>
            </form>
        </div>
    )
}
