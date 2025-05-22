import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import LOGO from '../assets/Login-Art.svg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const success = login(username, password);
    if (success) {
      setLoading(false)
      navigate('/dashboard');
    } else {
      setLoading(false)
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img className="login-image" src={LOGO} alt="Floral" />
        <h1>Welcome Back 👋</h1>
        <p className="subtext">
          Today is a new day. It's your day. You shape it. <br />
          Sign in to start managing your projects.
        </p>

        <div className="form-container">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Example@email.com"
            required
            value={username}
            onChange={(e)=>setUsername(e?.target.value)}
        />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="At least 8 characters"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />

          {/* <a className="forgot" href="#/forgetpassword">
            Forgot Password?
          </a> */}

          {error && <div className="error">{error}</div>}
          <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        </div>
        <div className="divider" />
        <footer>© 2023 ALL RIGHTS RESERVED</footer>
      </div>
    </div>
  );
}
