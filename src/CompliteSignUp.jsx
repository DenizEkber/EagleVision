import React from 'react'
import { useParams } from 'react-router-dom'

export default function CompliteSignUp() {
    const {email}=useParams()
  return (
    <div className='Login' style={{width:'600px'}}>
        <h2><a>{email}</a> adli hesabiniz yaradildi.</h2>
        <p style={{fontSize:'20px'}}>Giris ucun <a href='http://localhost:3000/'>ana menuya</a> donun</p>
    </div>
  )
}
