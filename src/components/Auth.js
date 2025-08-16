import React, { useState } from 'react';
import { supabase } from '../api/supabaseClient';

export default function Auth({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (data?.user) onLogin(data.user);
    else alert(error?.message || 'Login failed');
  };

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data?.user) onLogin(data.user);
    else alert(error?.message || 'Signup failed');
  };

  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}