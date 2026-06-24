import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  const [mode, setMode] = useState('signup')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username === '') {
      alert('Username is required!')
      return
    }

    else if (email === '') {
      alert('Email is required!')
      return
    }

    else if (password === '') {
      alert('Password is required')
      return
    }

    navigate('/home')

  }

  return (
    <div className='authBox'>
      <div className="authCard">
        <button className='button' onClick={() => setMode('signup')}>Sign Up</button>
        <button className='button' onClick={() => setMode('login')}>Log In</button>
        <form onSubmit={handleSubmit}>
          <input
            className='inputBox'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {mode === 'signup' && (
            <input
              className='inputBox'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          <input
            className='inputBox'
            placeholder="Password"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App
