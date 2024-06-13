"use client"
import axios from 'axios'
import React, { useState } from 'react'

const SendMail = () => {
    const [email, setEmail] = useState<any>()
    const [body, setBody] = useState<any>()

   function sendMail(){
    axios.post('/api/mail/basic',{
        subject: email,
        body,
    }).then((res)=>{
        console.log(res)
    }).catch((er)=>{
        console.log(er)
    })
}
   
  return (
    <div>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}  placeholder='Email'  />
        <input type="text" onChange={(e)=>setBody(e.target.value)}  placeholder='Body' />
        <button onClick={sendMail}>Enviar</button>
    </div>
  )
}

export default SendMail