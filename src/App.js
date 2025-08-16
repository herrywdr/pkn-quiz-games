import React, { useState } from 'react';
import Auth from './components/Auth';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import DailyChallenge from './components/DailyChallenge';
import Tournament from './components/Tournament';

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Auth onLogin={setUser} />;
  return (
    <div>
      <h1>PKN Quiz Games</h1>
      <Quiz user={user} />
      <DailyChallenge user={user} />
      <Leaderboard />
      <Tournament />
    </div>
  );
}