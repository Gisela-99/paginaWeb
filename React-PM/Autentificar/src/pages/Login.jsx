import { useState } from 'react';
import { useUserContext } from '../providers/UserProvider';
import {signUp, signIn} from '../services/auth'


const Login = () => {
    const {setUser} = useUserContext();
    const[email,setEmail]= useState('')
    const[password, setPassword]= useState('')
    const[error,setError]=useState('')
   
    
    const handleSignIn = async() =>{
        if(!email||!password){
          setError('Por favor, rellena email y contraseña')
          return
        }
        setError('')
        try{
          const user= await signIn (email, password)
            setUser({uid: user.uid, email: user.email})
        }catch(err){
        setError(err.message || 'error al inicio')
      }
    }
    const handleSignUp = async () => {
      if (!email || !password ) {
        setError('Por favor, rellena todos los campos');
        return;
      }
      setError('');
      try {
        // Aquí llamas a la función que crea el usuario, por ejemplo:
        const user = await signUp(email, password);
        // Luego actualizas el estado de usuario con info:
        setUser({ uid:user.uid, email:user.email });
      } catch (err) {
        setError(err.message || 'Error en el registro');
      }
    };

    return (
      <> 
       <style>{`
        body, html {
          height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #6c63ff, #3a3a60, #1e1e2f);
          background-size: 400% 400%;
          animation: gradientAnimation 15s ease infinite;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @keyframes gradientAnimation {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .login-container {
          max-width: 50%;
          margin: 40px auto;
          padding: 24px;
          background: #1e1e2f;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          color: #f0f0f5;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }
        .login-container input {
          width: 60%;
          padding: 12px 16px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          background: #2c2c44;
          color: #eee;
          transition: background-color 0.3s ease;
        }
        .login-container input::placeholder {
          color: #bbb;
        }
        .login-container input:focus {
          outline: none;
          background-color: #3a3a60;
          box-shadow: 0 0 5px #6c63ff;
          color: white;
        }
        .login-container button {
          width: 48%;
          padding: 12px 0;
          margin: 10px 1% 0 1%;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: #6c63ff;
          color: white;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 8px rgba(108, 99, 255, 0.6);
        }
        .login-container button:hover {
          background-color: #574fd6;
          box-shadow: 0 6px 12px rgba(87, 79, 214, 0.8);
        }
        .login-container button:active {
          background-color: #453cbc;
        }
      `}</style>
        <div className='login-container'>
          <input type="email" name="email" id="email"  placeholder='email' value={email} onChange={e=> setEmail(e.target.value)}/>
          <input type="password" name="password" id="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
           {error && <div className="error-message">{error}</div>}
          <button onClick={handleSignIn}>SignIn</button>
          <button onClick={handleSignUp}>SignUp</button>
        </div>


          {/* <button onClick={() => setUser({ username: 'Paco', uid: 33 })}>Save User</button> */}
      </>
       
    );
}

export default Login;