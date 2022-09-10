import { FormEvent, useState } from 'react';
import Meta from '../components/Meta';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <Meta title="Log In" />

      <h1>Log In</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
