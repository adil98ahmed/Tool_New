import { useState } from 'react';
import style from '../styles/loginStyle.css'
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { username, password });

    // After login, redirect
    navigate('/choose_project');
  };

  return (
    <div className="login-  container">
        <h2 className="login-title">Login</h2>
        
        <form action="#" method="post">
            <div className="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder='name@example.com'/>
            </div>
            
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>
            </div>
            
            <input onClick = {handleSubmit} type="submit" value="Login" className="submit-button"/>
        </form>
    </div>
  );
}