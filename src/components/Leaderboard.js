import React, { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const { data } = await supabase
        .from('progress')
        .select('user_id, score')
        .order('score', { ascending: false })
        .limit(10);
      setLeaders(data || []);
    };
    fetchLeaders();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((l, i) => <li key={i}>{l.user_id}: {l.score}</li>)}
      </ul>
    </div>
  );
}