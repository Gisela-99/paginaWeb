import React, { useState } from 'react'
import { useUserContext } from '../providers/UserProviders'
import{
  signUp,
  signIn
}from '../services/auth'

function Login() {
  const {setUser} = useUserContext()
  const[email,setEmail]= useState('')
  const[password, setPassword]= useState('')
  const[error, setError]=useState('')

  const handleSignIn = async()=>{
    if(!email|| !password){
      setError('Por favor, rellena email y contraseña')
    }
    setError('')
    try{
      const user=await signIn (email,password)
      setUser({uid:user.uid, email: user.email})
    }catch(err){
      setError(err.message||'error al inicio')
    }
  }

  const handleSignUp = async() => {
    if(!email||!password){
      setError('Por favor, rellena email y contraseña')
    }
    setError('')
    try{
      const user =  await signUp(email, password)
      setUser({uid:user.uid, email})

    }catch(err){
      setError(err.message||'Error al registro')
    }
  }
  return (
    <div>
      <input type="email" name='email' id='email' placeholder='email' value={email} onChange={e=> setEmail(e.target.value)} />
      <input type="password" name='password' id='password' placeholder='password' value={password} onChange={e=> setPassword(e.target.value)} />
      {error && <div>{error}</div>}
      <button onClick={handleSignIn}>Iniciar Sesión</button>
      <button onClick={handleSignUp}>Registrarse</button>
    </div>
  )
}

export default Login