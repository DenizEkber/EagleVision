import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from 'semantic-ui-react';

export default function Signup() {
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const InputAd = (e) => {
        setAd(e.target.value)
    }
    const InputSoyad = (e) => {
        setSoyad(e.target.value)
    }
    const HandleButton = (e) => {
        e.preventDefault();
        if (!ad || !soyad) {
            alert('Please fill in both name and surname fields.');
            return;
          }
        navigate(`/createemail/${ad}/${soyad}`)
    }

    const navigate = useNavigate()
    const body = document.querySelector('body');
    body.className = 'custom-body-dark'
    return (
        <div className='Login'>
            <h1>Vision</h1>
            <form onSubmit={HandleButton}>
                <h2>Create a Vision Account</h2>
                <label style={{display:'none'}} htmlFor='ad'>Ad</label>
                <Input placeholder='Name' onChange={InputAd} value={ad} id='ad' type='text' />
                <br />
                <label style={{display:'none'}} htmlFor='soyad'>Soyad</label>
                <Input placeholder='Surname' onChange={InputSoyad} value={soyad} id='soyad' type='text' />
                <br />

                <Button  style={{width:'100px',position:'relative',float: 'right'}}>Next</Button>

            </form>
        </div>
    )
}

